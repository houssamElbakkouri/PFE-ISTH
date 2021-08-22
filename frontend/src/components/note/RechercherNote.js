import React, { useState } from 'react'
import { Form, Col, Row, Container, Button } from 'react-bootstrap'

function RechercherNote({
    selectedAnnee, setSelctedAnnee,
    annees, niveaux, filieres, matieres,
    selectedNiveau, setSelectedNiveau,
    selectedFiliere, setSelectedFiliere,
    selectedMatiere, setSelctedMatiere,
    handleSearch, handleMatiereChange
}) {

    const [filteredFilieres, setFilteredFilies] = useState([])
    const formatNiveau = (niveau) => {
        if (niveau === 1)
            return '1er année'
        else
            return niveau + ' ème année'
    }

    const handleFiliereChange = () => {
        if (selectedNiveau === '' || selectedAnnee === '')
            return
        var f = [...filieres.current]
        f = f.filter(f => f.ANNEEID === parseInt(selectedAnnee) && f.NIVEAUID === parseInt(selectedNiveau))
        setFilteredFilies(f)
    }

    return (
        <Container>
            <Row xs='auto'>
                <Col>
                    <p className='text-start fs-2 text-white'>Année de formation :</p>
                </Col>
                <Col>
                    <Form.Control
                        onClick={handleFiliereChange}
                        as="select"
                        className="form-select"
                        size="lg"
                        onChange={(e) => setSelctedAnnee(e.target.value)}
                    >
                        <option key={-1} value="">-</option>
                        {
                            annees.map(annee => {
                                return (
                                    <option key={annee.anneeId} value={annee.anneeId}>{annee.annee}</option>
                                )
                            })
                        }
                    </Form.Control>
                </Col>
            </Row>
            <Row xs='auto'>
                <Col>
                    <p className='text-start fs-2 text-white'>Niveaux :</p>
                </Col>
                <Col>
                    <Form.Control
                        onClick={handleFiliereChange}
                        as="select"
                        className="form-select"
                        size="lg"
                        onChange={(e) => setSelectedNiveau(e.target.value)}
                    >
                        <option key={-1} value="">-</option>
                        {
                            niveaux.map(niveau => {
                                return (
                                    <option key={niveau.NIVEAUID} value={niveau.NIVEAUID}>{formatNiveau(niveau.NIVEAU)}</option>
                                )
                            })
                        }
                    </Form.Control>
                </Col>
            </Row>
            <Row xs='auto'>
                <Col>
                    <p className='text-start fs-2 text-white'>Filiere :</p>
                </Col>
                <Col>
                    <Form.Control
                        onClick={handleMatiereChange}
                        as="select"
                        className="form-select"
                        size="lg"
                        onChange={(e) => setSelectedFiliere(e.target.value)}
                    >
                        <option key={-1} value="">-</option>
                        {
                            filteredFilieres.map(filiere => {
                                return (
                                    <option key={filiere.FILIEREID} value={filiere.FILIEREID}>{filiere.NOMFILIERE}</option>
                                )
                            })
                        }
                    </Form.Control>
                </Col>
            </Row>
            <Row xs='auto'>
                <Col>
                    <p className='text-start fs-2 text-white'>Matière :</p>
                </Col>
                <Col>
                    <Form.Control
                        as="select"
                        className="form-select"
                        size="lg"
                        onChange={(e) => setSelctedMatiere(e.target.value)}
                    >
                        <option key={-1} value="">-</option>
                        {
                            matieres.map(matiere => {
                                return (
                                    <option key={matiere.MODULEID} value={matiere.MODULEID}>{matiere.NOMMODULE}</option>
                                )
                            })
                        }
                    </Form.Control>
                </Col>
            </Row>
            <Row xs='auto'>
                <Col md={{ span: 3, offset: 3 }}>
                    <Button className="pull-right" variant="success" onClick={handleSearch}>
                        Rechercher
                    </Button>
                    <h1> </h1>
                </Col>
            </Row>
        </Container>
    )
}

export default RechercherNote
