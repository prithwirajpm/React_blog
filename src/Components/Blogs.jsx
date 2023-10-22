import React, { useEffect,useState } from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap'
import { getAllBlog,DeleteABlog} from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReadBlog from './ReadBlog';


function Blogs({uploadBlogServerResponse}) {
    const [showBlog, setShowBlog] = useState([])
    const [showABlog, setShowABlog] = useState([])
    const getBlogs = async () => {
        const { data } = await getAllBlog()
        setShowBlog(data)
    }

    const deleteBlog = async (id)=>{
        await DeleteABlog(id)
        toast.error("Delete This File");
        getBlogs()
    }

  
    useEffect(() => {
        getBlogs()
    }, [uploadBlogServerResponse])
    return (
        <div className='container'>
            <Row className='m-5'>
            {showBlog?.length > 0 ? showBlog?.map((item, index) => 
                
                <Col sm={12} md={6} lg={4} xl={3}>
                  
                        <Card key={index} style={{ width: '18rem' }} className='mb-3 shadow'>
                            <Card.Img variant="top" src={item?.url} style={{height:'200px'}} />
                         
                            <Card.Body>
                                <Card.Title>{item?.title}</Card.Title>
                                <Card.Text>
                                    {item.about.slice(0,140)}
                                </Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <div><h5>{item?.username}</h5></div>
                                    <div>
                                        <button className='btn' onClick={()=>deleteBlog(item?.id)}><i className="fa-solid fa-trash" style={{ color: '#ac0202' }}></i></button>
                                        <ReadBlog id={item?.id}/>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    

                </Col>
            ) : <p>Nothing To Diplay</p>}
            </Row>
            <ToastContainer
                position='top-center'
                theme='colored'
                autoClose={2000}
            />

        </div>
    )
}

export default Blogs