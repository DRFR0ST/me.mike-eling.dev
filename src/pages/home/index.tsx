import React from 'react';
import {createUseStyles} from 'react-jss'
import { Link } from 'react-router-dom';
// @ts-ignore
import { useLitteraMethods} from 'react-littera';

const useStyles = createUseStyles({
    root: {
        paddingTop: "10vh",
        paddingLeft: "5vw",
        paddingRight: "5vw",
        maxWidth: "1280px"
    },
    title: {
        color: "#501ee6"
    }
  })

const Home = () => {
    const classes = useStyles();
    const methods = useLitteraMethods();

    return <div className={classes.root}>
        <h1 className={classes.title}>Eling Notes</h1>
        <div onClick={() => methods.setLocale("pl_PL")}>Polski</div>
        <div onClick={() => methods.setLocale("en_US")}>English</div>
        <br/>
        <br/>
        <br/>
        <AuthorCard />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link to="/post/hello_world">Hello World</Link>
    </div>
}

const useAuthorStyles = createUseStyles({
    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        maxWidth: '1280px'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 300,
    },
    title: {
        
    },
    description: {
        opacity: .65
    }
  })

const AuthorCard = () => {
    const classes = useAuthorStyles();

    return <div className={classes.root}>
        <img alt="profile-pic" src="https://pbs.twimg.com/profile_images/1156869245533380610/TAeINR4h_400x400.jpg" className={classes.avatar} />
        <div>
        <h4 className={classes.title}>Mike Eling</h4>
        <p className={classes.description}>Minim proident fugiat laborum do cillum id occaecat labore nisi fugiat eu. Duis id irure enim proident occaecat incididunt. Sunt nisi Lorem qui officia. Magna occaecat aliqua amet occaecat id.</p>
        </div>
    </div>
}

export default Home;