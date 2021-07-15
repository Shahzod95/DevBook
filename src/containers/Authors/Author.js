import React, { useState } from 'react';
import AuthorImg from '../../assets/images/author.svg';
import {StyledInput, Img, StyledCounter, AuthorLeft, TextArea, AuthorRight, Paragraph, Button, H2} from '../../assets/style/AuthorStyles';

const Author = () => {

    const [state, setState] = useState({
        firstName:"",
        lastName:"",
        dateOfBirth:"",
        dateOfDeath:"",
        country:""

    })

    return (
        <>
            <StyledCounter>
            <AuthorLeft>
                <Img src={AuthorImg} alt="Author image" />
                <H2>Ulug'bek xazinasi</H2>
                <Button>Upload image</Button>
            </AuthorLeft>

            <AuthorRight>
                <Paragraph>Add author</Paragraph>
                <form>
                    <StyledInput
                        type="text"
                        name="firstName"
                        value={state.firstName}
                        className="author-input"
                        placeholder="First name"
                    />
                    <StyledInput                        type="text"
                        name="lastName"
                        value={state.lastName}
                        className="author-input"
                        placeholder="Last name"
                    />
                    <StyledInput                        type="date"
                        name="dateOfBirth"
                        value={state.dateOfBirth}
                        className="author-input"
                        placeholder="Date of birth"
                    />
                    <StyledInput                       type="date"
                        name="dateOfDeath"
                        value={state.dateOfDeath}
                        className="author-input"
                        placeholder="Date of death"
                    />
                    <StyledInput
                        type="text"
                        name="country"
                        value={state.country}
                        className="author-input"
                        placeholder="Country"
                    />
                    <TextArea placeholder="Bio"></TextArea>
                    <br />
                    <Button>Create</Button>
                </form>
            </AuthorRight>


        </StyledCounter>
        </>
    );
}

export default Author;