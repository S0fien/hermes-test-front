import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import {Button, Col, Image, ListGroup, ListGroupItem, Modal, Row} from "react-bootstrap";
import {useMemo, useState} from "react";
import {UsersDTO} from "./types/DTO/users.ts";
import {AlbumsDTO} from "./types/DTO/albums.ts";
import {PhotosDTO} from "./types/DTO/photos.ts";
import {fetchAlbums, fetchPhotos, fetchUsers} from "./utils/api.ts";

type ModalInterface = {
    title: string;
    url: string;
    photoTitle: string;
}

function App() {
    const [users, setUsers] = useState<UsersDTO>([])
    const [albums, setAlbums] = useState<AlbumsDTO>([])
    const [photos, setPhotos] = useState<PhotosDTO>([])
    const [show, setShow] = useState(false);
    const [modalState, setModalState] = useState<ModalInterface>({photoTitle: "", title: "", url: ""})
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fetchData = async () => {

        try {
            const [userData, albumData, photoData] = await Promise.all([
                fetchUsers(),
                fetchAlbums(),
                fetchPhotos()
            ]);
            setUsers(userData);
            setAlbums(albumData);
            setPhotos(photoData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }

    const userAlbums = useMemo(() => {
        return users.map(user => ({
            ...user,
            albums: albums.filter(album => album.userId === user.id)
        }));
    }, [users, albums]);


    return (
    <Stack gap={3}>
      <Container
        className="d-flex align-items-center justify-content-center bg-secondary-subtle"
        fluid
        style={{ height: "300px" }}
      >
        <h1>Hermes Digital</h1>
      </Container>

      <Container>
          {userAlbums ?
              <Button onClick={fetchData}>Load albums</Button> :
              <Button variant={'success'}>Loaded</Button>
          }
      </Container>
        <Container>
          <Row md={3}>
              {userAlbums && userAlbums.map((user) => (
                  <Col key={user.id}>
                      <ListGroup>
                          <ListGroupItem active>{user.name}</ListGroupItem>
                          {user.albums && user.albums.map((album) => (
                              <ListGroupItem key={album.id} style={{ display: 'flex', justifyContent: 'space-between'}}>
                                  {album.title}
                                  <Button onClick={() => {
                                      setModalState({
                                          title: album.title,
                                          url: photos[0].url,
                                          photoTitle: photos[0].title
                                      })
                                      handleShow()
                                  }}>See</Button>
                              </ListGroupItem>
                          ))}
                      </ListGroup>
                  </Col>
              ))}

              <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                      <Modal.Title>{modalState.title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body><Image fluid src={modalState.url} /></Modal.Body>
                  <Modal.Footer>
                      <p>{modalState.photoTitle}</p>
                  </Modal.Footer>
              </Modal>
          </Row>
      </Container>
    </Stack>
  );
}

export { App };
