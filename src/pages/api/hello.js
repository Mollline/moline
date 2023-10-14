const post = []

export default function handler(req, res) {
  if(req.method === 'POST'){
    posts.push({
      owner:{fistName:'baldan'},
      text:'tw uywefg uywesdh  eurvb dskj dbc',
      image:'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
    })
  }

  res.status(200).json({ mesage: "hello" });
}
