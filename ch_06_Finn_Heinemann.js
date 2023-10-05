// Homework Chapter 6
// Finn Heinemann

// Exercise 1 - Group

class Group{
    constructor(){
        this.array = [];
    }

    add(object){
        let included=false;
        for(let i=0; i< this.array.length;i++){
            if(this.array[i] == object){
                included = true;
            }
        }
        if(included){
            return("The object already exists!");
        }
        else{
            this.array.push(object);
        }
        
    }

    delete(object){
        let included=false;
        for(let i=0; i< this.array.length;i++){
            if(this.array[i] == object){
                included = true;
            }
        }
        if(included==true){
            this.array = this.array.filter(elem => elem !== object); //Stackoverflow was helpful to determine how to get rid of the object with filter()
        }
        else{
            return("The object you are trying to delete does not exist!");
        }
    }

    has(object){
        let included=false;
        for(let i=0; i< this.array.length;i++){
            if(this.array[i] == object){
                included = true;
            }
        }
        return included;

    }

    static from(object){
        let newGroup = new Group;
        for(let current of object){
            newGroup.add(current);
        }
        return newGroup;
    }

}

// Try it out:

let group = Group.from([10, 20]);
console.log(group.add(10));
console.log(group.delete(50));

console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false