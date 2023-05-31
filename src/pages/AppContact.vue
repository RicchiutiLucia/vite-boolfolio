<template>
    <div class="container">
        <form>
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="name" class="form-control" id="name">
            
        </div>
        <div class="mb-3">
            <label for="LastName" class="form-label">LastName</label>
            <input type="text" class="form-control" id="LastName">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        
        <div class="form-floating mb-3">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">Comments</label>
        </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    </div>
    
</template>


<script>
    export default {
        name: 'AppContact'
    }
</script>