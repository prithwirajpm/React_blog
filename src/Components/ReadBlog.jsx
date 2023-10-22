import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getABlog } from '../services/allAPI'

function ReadBlog({id}) {
  const [show, setShow] = useState(false);
  const [showABlog,setshowABlog] = useState("")
  const readABlog = async ()=>{
    setShow(true)
    const {data} = await getABlog(id)
    setshowABlog(data);
}

  return (
    <>
      <Button variant="primary" onClick={() =>readABlog() }>
        <i class="fa-brands fa-readme" style={{ color: '#00b377' }}></i>
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          {showABlog?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={showABlog?.url} alt={showABlog?.title} width={'100%'} />
          <p className='p-4' style={{textAlign:'justify'}}>
            {showABlog?.about}
          </p>
          <h5 className='text-end p-4'><i className="fa-solid fa-feather me-2"></i>{showABlog?.username}</h5>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ReadBlog;