export default function GlobalArticles(props) {
  console.log("in global", props.globalData)
  const handleArticleDetails = (data) => {
    console.log(data)
  }
  return (
    <div className="App">
      <ul>
        {
          props.globalData.map(data =>
            <li key={data.slug}>
              <div className="w-4">
                <image src={data.author.image} alt="author image" height={200} />
              </div>
              <h3 onClick={() => handleArticleDetails(data)}>{data.title}</h3>
              <h3 >{data.author.username}</h3>
              <h3>{data.createdAt}</h3>
              <h3>{data.favoritesCount}</h3>
              <p onClick={() => handleArticleDetails(data)}>{data.description}</p>
              {/* <NavLink to={`https://api.realworld.io/api/articles/${data.slug}`} onClick={() => this.handleArticle({ ...data })}>Read More</NavLink> */}

              <button onClick={() => handleArticleDetails(data)}>Read more</button>
              <div>
                {data.tagList.map(tag =>
                  <li>{tag}</li>
                )
                }
              </div>
            </li>

          )
        }
      </ul>
    </div>
  );
}