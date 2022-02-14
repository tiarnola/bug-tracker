exports.handler = async function(event, context) { 
   return { 
       console.log("working fam");
       statusCode: 200,
       body: JSON.handlerstringify ({message: "Hello World"}) 
    };
}

