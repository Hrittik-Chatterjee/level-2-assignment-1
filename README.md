## What are some differences between interfaces and types in TypeScript?

The main differences between interfaces and types in Typescript are:

- We can use primitive values in types but in interfaces we cant use primitive values
- Interfaces structure are object like while with types we can use unions, intersections, and conditional types, interfaces can not do that
- Interfaces can be declared multiple times with the same name it will combined into one. Types can't do this it will show error with types


## Provide an example of using union and intersection types in TypeScript.

1. Union Types: Union types allow varible to hold multiple types you can use a value of any of the types provided in the union.

  # Example: 
  
            type StringOrBoolean = string | boolean
            let value: StringOrBoolean
            value = "Hello"
            value = True

2. Intersection Types: An intersection type combines multiple types into one and the varible must use all the propertive given in the intersection types otherwise it will throw error

  # Example: 

            type Person = { name: string }
            type Address = { street: string}

            type PersonWithAddress = Person & Address

            const user: PersonWithAddress = {
                            name: "Alice",
                            street: "123 Main St",
                        }


