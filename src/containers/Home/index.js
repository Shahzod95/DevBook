import React from 'react';
import Books from '../Books';
import GlobalContext from '../../context/GlobalContext';
import Header from '../../components/Header/Header';

export default class Home extends React.PureComponent {
  state = {
    lang: 'uz'
  };

  handleLanguage = (lang) => {
    this.setState({ lang })
  }

  render() {
    const { lang } = this.state;

    return (
      <GlobalContext.Provider value={{
        handleLanguage: this.handleLanguage,
        lang,
        me: {
          name: 'Admin',
          role: 'admin'
        }
      }}>
        <div>
          <Header />
          <h2>Home Page</h2>
          <select name="lang" onChange={(e) => this.handleLanguage(e.target.value)} value={this.state.lang}>
            <option value="uz">Uzbekcha</option>
            <option value="ru">Ruscha</option>
            <option value="en">Englizcha</option>
          </select>
          <Books />
        </div>
      </GlobalContext.Provider>
    )
  }
}