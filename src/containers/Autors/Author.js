import React, { useState } from 'react';
import AuthorStyle from './assets/style/AuthorStyle';

const Author = () => {

    const [state, setState] = useState({
        firstName:"",
        lastName:"",
        dateOfBirth:"",
        dateOfDeath:"",
        country:""

    })

    return (
        <div className="author">
            <div className="author-left">
                <img src="" alt="Author image" />
                <h2 className="author-name">Abdulla Avloniy</h2>
                <button className="upload-button">Upload image</button>
            </div>

            <div className="author-right">
                <h2>Add author</h2>
                <form>
                    <input
                        type="text"
                        name="firstName"
                        value={state.firstName}
                        className="author-input"
                        placeholder="First name"
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={state.lastName}
                        className="author-input"
                        placeholder="Last name"
                    />
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={state.dateOfBirth}
                        className="author-input"
                        placeholder="Date of birth"
                    />
                    <input
                        type="date"
                        name="dateOfDeath"
                        value={state.dateOfDeath}
                        className="author-input"
                        placeholder="Date of death"
                    />
                    <input
                        type="text"
                        name="country"
                        value={state.country}
                        className="author-input"
                        placeholder="Country"
                    />
                    <textarea>Bio</textarea>

                </form>
            </div>


        </div>
    );
}

export default Author;