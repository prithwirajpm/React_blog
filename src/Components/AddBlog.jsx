import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { uploadBlog } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddBlog({setuploadBlogServerResponse}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [blog, setBlog] = useState({
        id: "", title: "", username: "", url: "", about: ""
    })

    const handleUpload = async (e) => {
        const { id, title, username, url, about } = blog
        if (!id || !title || !username || !url || !about) {
            toast.warning("plz fill the all form");
        } else {
            const response = await uploadBlog(blog)
            console.log(response);
            if (response.status >= 200 && response.status < 300) {
                // set server response
                setuploadBlogServerResponse(response.data)
                toast.success(`'${response.data.title}' Blog uploaded successfully`)
                // model hide
                // video
                setBlog({
                    id: "", title: "", username: "", url: "", about: ""
                })
                handleClose()
            } else {
                console.log(response);
                toast.error("Can not perform the action......")
            }
        }
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Your Blogs
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Upload Your Experance</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please Fill the Following Details</p>
                    <Form className='border border-secondary rounded p-3'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter blog Id" onChange={(e) => setBlog({ ...blog, id: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="User Name" onChange={(e) => setBlog({ ...blog, username: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Blog Title" onChange={(e) => setBlog({ ...blog, title: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Upload Image URL" onChange={(e) => setBlog({ ...blog, url: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control as='textarea' placeholder="Enter Your Experence " rows={5} onChange={(e) => setBlog({ ...blog, about: e.target.value })} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleUpload}>Upload</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer
                position='top-center'
                theme='colored'
                autoClose={2000}
            />
        </>

    );
}

export default AddBlog;