        //Escaping Literal Quotes
        const literalString = "Alan said, \"Peter is learning JavaScript\".";

        //string concatenation
        const ourStr = "I come first. " + "I come second.";
        let stringVar = " I come in between. ";
        const ourNewStr = "I come first." + stringVar + "I come second." ;
        
        //string split
        let splitString = "This is a string";
        let B1 = splitString.split(' ')
        
        //Substring

        //indexOf
        console.log(A.indexOf('string'));
        console.log(A.toLocaleUpperCase());
        console.log(A.toLocaleLowerCase());

        //string template literals
        console.log('I am ${2+3} years old');

        //string backticks
        function hey ()
        {return 'hello world';}

        function add ()
        {return 2+1;}

        console.log('The function says ${hey()}');
        //constructing strings with variables
        const ourName = "freeCodeCamp";
        const ourStr2 = "Hello, our name is " + ourName + ", how are you?";
