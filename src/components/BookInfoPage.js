import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function BookInfoPage() {
    let { id } = useParams();

    const bookCover = useRef(null);
    const description = useRef(null);

    const [isLoading, setIsLoading] = useState(false);
    const [book, setBook] = useState({});
    const [descriptionOpen, setDescriptionOpen] = useState([false]);

    useEffect(() => {
            
    }, [])

    let fakeBook = { 
        title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: "epub", filesize: '496963', id: "255661", coverurl:"../../public/images/cover.jpg", publisher: "McGraw Hill", edition: "4th", description: "Key Message: This book aims to explain physics in a readable and interesting manner that is accessible and clear, and to teach readers by anticipating their needs and difficulties without oversimplifying. Physics is a description of reality, and thus each topic begins with concrete observations and experiences that readers can directly relate to. We then move on to the generalizations and more formal treatment of the topic. Not only does this make the material more interesting and easier to understand, but it is closer to the way physics is actually practiced. Key Topics: INTRODUCTION, MEASUREMENT, ESTIMATING, DESCRIBING MOTION: KINEMATICS IN ONE DIMENSION, KINEMATICS IN TWO OR THREE DIMENSIONS; VECTORS, DYNAMICS: NEWTON’S LAWS OF MOTION , USING NEWTON’S LAWS: FRICTION, CIRCULAR MOTION, DRAG FORCES, GRAVITATION AND NEWTON’S6 SYNTHESIS , WORK AND ENERGY , CONSERVATION OF ENERGY , LINEAR MOMENTUM , ROTATIONAL MOTION , ANGULAR MOMENTUM; GENERAL ROTATION , STATIC EQUILIBRIUM; ELASTICITY AND FRACTURE , FLUIDS , OSCILLATIONS , WAVE MOTION,  SOUND , TEMPERATURE, THERMAL EXPANSION, AND THE IDEAL GAS LAW KINETIC THEORY OF GASES, HEAT AND THE FIRST LAW OF THERMODYNAMICS , SECOND LAW OF THERMODYNAMICS , ELECTRIC CHARGE AND ELECTRIC FIELD , GAUSS’S LAW , ELECTRIC POTENTIAL , CAPACITANCE, DIELECTRICS, ELECTRIC ENERGY STORAGE ELECTRIC CURRENTS AND RESISTANCE, DC CIRCUITS, MAGNETISM, SOURCES OF MAGNETIC FIELD, ELECTROMAGNETIC INDUCTION AND FARADAY’S LAW, INDUCTANCE, ELECTROMAGNETIC OSCILLATIONS, AND AC CIRCUITS, MAXWELL’S EQUATIONS AND ELECTROMAGNETIC WAVES, LIGHT: REFLECTION AND REFRACTION, LENSES AND OPTICAL INSTRUMENTS, THE WAVE NATURE OF LIGHT; INTERFERENCE, DIFFRACTION AND POLARIZATION, SPECIAL THEORY OF RELATIVITY, EARLY QUANTUM THEORY AND MODELS OF THE ATOM, QUANTUM MECHANICS, QUANTUM MECHANICS OF ATOMS, MOLECULES AND SOLIDS,  NUCLEAR PHYSICS AND RADIOACTIVITY, NUCLEAR ENERGY: EFECTS AND USES OF RADIATION, ELEMENTARY PARTICLES,ASTROPHYSICS AND COSMOLOGY  Market Description: This book is written for readers interested in learning the basics of physics. " 
    };

    useEffect(async () => {
        setIsLoading(true);
        // const result = await axios.get(`http://libgen.rs/json.php?ids=${id}?fields=Title,Author`, {
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         'Access-Control-Allow-Headers': '*'
        //     }
        // }).catch(err => console.log(err))
        // .then((result) => {
        //     if (result.data.notFound) {
        //         console.log("No data found") 
        //     } else {
        //         console.log(result.data)
        //         setBook(result.data);
        //     }
        //     setIsLoading(false);
        // });
        setTimeout(() => {
            setBook(fakeBook);
            console.log(book);
            loadResult();
            setIsLoading(false);
        }, 2000);
    }, [])

    const loadResult = () => {
        bookCover.current.style.backgroundImage = `url(${book.coverurl ? book.coverurl : '../../public/images/image-not-found.png'})`
        console.log(book);
        description.current.textContent = book.description.splice(0, 300);
    }
    

    const readMore = (e) => {
        if (descriptionOpen) {
            console.log(book.description);
            description.current.textContent = book.description.splice(0, 300);
            setDescriptionOpen(false);
        } else {
            description.current.textContent = book.description;
            setDescriptionOpen(true);
        }
    }

    return (
        <div className='bookInfoPage'>
            <div className='top'>
                <div className='cover' ref={bookCover}></div>
                <div className='info'>
                    <h1>{book.title}</h1>
                    <p>{book.author}</p>
                    <p ref={description}>
                    </p>
                    <p className='readMore' onClick={(e) => readMore(descriptionOpen)}> {descriptionOpen ? '...Read Less' : '...Read More'}</p>
                </div>
            </div>
            <div className='bottom'>
                <div>
                    <p>Year: {book.year}</p>
                    <p>Edition: {book.edition}</p>
                    <p>Publisher: {book.publisher}</p>
                    <p>ISBN: {book.isbn}</p>
                </div>
                <div>
                    <p>Year: {book.year}</p>
                    <p>Edition: {book.edition}</p>
                    <p>Publisher: {book.publisher}</p>
                    <p>ISBN: {book.isbn}</p>
                </div>
            </div>
        </div>
    )
}
