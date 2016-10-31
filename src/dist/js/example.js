riot.tag2('example', '<div class="container"> <div class="panel panel-primary chat-bg" style="align-items:center; justify-content:center;"> <div class="panel-heading"> <h3 class="panel-title">TODO List</h3> </div> <div class="list-group"> <div each="{todos}" class="list-group-item" key="{id}"> <div class="pull-right"> <button class="btn btn-xs btn-danger" onclick="{parent.removeTodo}"> Delete </button> </div> {name} </div> <div class="list-group-item"> <form id="todo-form" name="todo-form" class="list-group-item" onsubmit="{createTodo}"> <input text="form-control" type="text" name="todoInput" onkeyup="{edit}" placeholder="Enter a message and press enter"> </form> </div> </div> </div> </div>', '', '', function(opts) {


        var self = this;
        self.todoToAdd = '';

        var store = new JSData.DS();

        var firebaseAdapter = new DSFirebaseAdapter({
            basePath: 'https://app-pnw3dev.firebaseio.com'
        });
        store.registerAdapter('firebase', firebaseAdapter, { default: true });

        var TodoStore = store.defineResource({
            name: 'todo',
            afterInject: function () {
                TodoStore.emit('change');
            },
            afterEject: function () {
                TodoStore.emit('change');
            }
        });

        for (var resourceName in store.definitions) {
            var Resource = store.definitions[resourceName];
            var ref = firebaseAdapter.ref.child(Resource.endpoint);

            ref.on('child_changed', function(dataSnapshot) {
                var data = dataSnapshot.val();
                if (data[Resource.idAttribute]) {
                    Resource.inject(data);
                }
            });

            ref.on('child_removed', function (dataSnapshot) {
                var data = dataSnapshot.val();
                if (data[Resource.idAttribute]) {
                    Resource.eject(data[Resource.idAttribute]);
                }
            });
        }

        TodoStore.on('change', function() {
            self.todos = TodoStore.getAll();
            self.update();
        });

        self.on('mount', function() {

            TodoStore.findAll();
        });

        this.edit = function(e) {
            self.todoToAdd = e.target.value;
        }.bind(this)

        this.createTodo = function() {
            if (self.todoToAdd) {
                TodoStore.create({ name: self.todoToAdd }).then(function () {
                    self.todoToAdd = self.todoInput.value = '';
                });
            }
        }.bind(this)

        this.removeTodo = function(e) {
            TodoStore.destroy(e.item.id);
        }.bind(this)
});
