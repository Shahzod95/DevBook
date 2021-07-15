import React, { useState } from 'react';
import BookImg from '../../assets/images/bookImage.svg';
import {StyledInput, Img1, StyledCounter, AuthorLeft, TextArea, AuthorRight, Paragraph, Button, H2} from '../../assets/style/AuthorStyles';

const AddBook = () => {

    const [state, setState] = useState({
        title:"",
        pages:"",
        year:"",
        price:"",
        country:"",
        author:"",
        description:"",

    })

    return (
        <>
            <StyledCounter>
            <AuthorLeft>
                <Img1 src={BookImg} alt="Author image" />
                <H2>Ulug'bek xazinasi</H2>
                <Button>Upload cover</Button>
            </AuthorLeft>

            <AuthorRight>
                <Paragraph>Add book</Paragraph>
                <form>
                    <StyledInput
                        type="text"
                        name="title"
                        value={state.title}
                        className="author-input"
                        placeholder="Title"
                    />
                    <StyledInput
                        type="number"
                        name="pages"
                        value={state.pages}
                        className="author-input"
                        placeholder="Pages"
                    />
                    <StyledInput                        
                        type="date"
                        name="year"
                        value={state.year}
                        className="author-input"
                        placeholder="Year"
                    />
                    <StyledInput                       
                        type="number"
                        name="price"
                        value={state.price}
                        className="author-input"
                        placeholder="Price"
                    />
                    <StyledInput
                        type="text"
                        name="country"
                        value={state.country}
                        className="author-input"
                        placeholder="Country"
                    />
                    <StyledInput
                        type="text"
                        name="author"
                        value={state.author}
                        className="author-input"
                        placeholder="Author"
                    />
                    <TextArea placeholder="Description"></TextArea>
                    <br />
                    <Button>Create</Button>
                </form>
            </AuthorRight>


        </StyledCounter>
        </>
    );
}

export default AddBook;