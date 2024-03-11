let posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let postWrapper = document.getElementById("posts-wrapper")


function renderPost(postInfo, Index){
    let name = postInfo.name
    let username = postInfo.username
    let location = postInfo.location
    let avatar = postInfo.avatar
    let post = postInfo.post
    let comment = postInfo.comment
    let likes = postInfo.likes
    let postIndex = Index

    let currentPost = document.createElement("section")
    currentPost.innerHTML = `<div class="post-heading flex">
                                <img class="profile post-profile" src="${avatar}">
                                <div>
                                    <h3 class="bold">${name}</h3>
                                    <h3 class="mini-text">${location}</h3>
                                </div>
                            </div>
                                    `


    let likeImage = document.createElement("img")

    likeImage.addEventListener("dblclick", function(){
        posts[postIndex].likes++
        renderAll(posts)
    })

    likeImage.classList += "post-img"
    likeImage.src = post
    currentPost.append(likeImage)

    let descriptionDiv = document.createElement("div")
    descriptionDiv.classList += "description-wrap"

    descriptionDiv.innerHTML = `<div class="icons-wrap flex">
                                    <img class="icon" src="./images/icon-heart.png" alt="Like">
                                    <img class="icon" src="./images/icon-comment.png" alt="Comment">
                                    <img class="icon" src="./images/icon-dm.png" alt="Dm">
                                </div>
                                    <h3 class="bold">${likes} likes</h3>
                                    <h3><span class="bold">${username}</span> ${comment}</h3>`
    currentPost.append(descriptionDiv)

    postWrapper.append(currentPost)
}

function renderAll(allPosts){
    postWrapper.innerHTML = null
    for(let i = 0; i < allPosts.length; i++){
        renderPost(allPosts[i], i)
    }
}

renderAll(posts)