import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Collapse from '@material-ui/core/Collapse';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import { Remarkable } from 'remarkable';
import '../App.css';
import Header from './HeaderComponent';

const documents = [
    {
        'id': 0,
        'title': 'Linux Heap Exploiting Revisited',
        'author': 'newlog',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'link': 'thsiisthelink',
        'tags': ['slides', 'talk', 'heap', 'exploiting', 'linux'],
        'date': '03/01/2013'
    },
    {
        'id': 1,
        'title': 'Reverse Engineering Master\'s Degree Course',
        'author': 'newlog',
        // eslint-disable-next-line no-multi-str
        'description': '\
            1. Introduction to Memory Architecture\n\
            2. Binary File Formats\n\
            3. Introduction to Static Analysis\n\
            4. Understanding Instruction Set Architectures\n\
            5. Reverse Engineering Malware\n\
                5.1. Static Analysis\n\
                5.2. Dynamic Analysis\n\
                5.3. Tactics, Techniques, and Procedures\n\
                5.4. Unpacking\n\
            6. Introduction to non-intel architectures (by pancake)\n\
            7. Forensics seen as a reverse engineer (by pancake)\n\
            8. Vulnerability research (by pancake)\
         ',
        'link': 'thsiisthelink',
        'tags': ['course', 'linux', 'windows', 'reverse_engineering'],
        'date': '01/01/2018'
    },
    {
        'id': 2,
        'title': 'Exploiting in Windows',
        'author': 'newlog',
        // eslint-disable-next-line no-multi-str
        'description': '\
        1. Introduction\n\
            1.1. Stack Frames\n\
            1.2. Hands-on\n\
        2. Stack Based Buffer Overflows\n\
            2.1. Attack Vector #1\n\
            2.2. Overwriting sEIP\n\
            2.3. Real Exploit\n\
            2.4. Attack Vector #2\n\
            2.5. Structured Exception Handling\n\
            2.6. Real Exploit\n\
        3. Exploit Mitigation Techniques and Evasion\n\
            3.1. SafeSEH\n\
            3.2. SEHOP\n\
            3.3. Stack Cookies\n\
            3.4. Data Execution Prevention (DEP)\n\
            3.5. Return Oriented Programming (ROP)\n\
            3.6. Real Exploit\n\
            3.7. Address Space Layout Randomization (ASLR)\n\
            3.8. Limitations\n\
            3.9. Real Exploit\n',
        'link': 'thsiisthelink',
        'tags': ['training', 'slides', 'exploiting', 'windows'],
        'date': '01/01/2015'
    },
    {
        'id': 3,
        'title': 'Study and Exploitation of the Dynamic Memory Management Systems in GNU/Linux',
        'author': 'newlog',
        'description': 'This second paper is amazing',
        'link': 'thsiisthelink',
        'tags': ['paper', 'exploiting', 'heap', 'linux'],
        'date': '01/01/2012'
    },
    {
        'id': 4,
        'title': 'Introduction to Software Exploitation in Linux Systems',
        'author': 'newlog',
        'description': 'This second paper is amazing',
        'link': 'thsiisthelink',
        'tags': ['paper', 'exploiting', 'linux'],
        'date': '01/01/2011'
    },
    {
        'id': 5,
        'title': 'Heap Spraying Evolution',
        'author': 'newlog',
        'description': 'This second paper is amazing',
        'link': 'thsiisthelink',
        'tags': ['slides', 'talk', 'exploiting', 'heap', 'windows', 'browsers'],
        'date': '01/11/2014'
    },
    {
        'id': 6,
        'title': 'What do you do when your boss wants undetectable malware?',
        'author': 'newlog',
        'description': 'This second paper is amazing',
        'link': 'thsiisthelink',
        'tags': ['slides', 'talk', 'powershell', 'obfuscation', 'post-exploitation'],
        'date': '01/06/2017'
    },
    {
        'id': 7,
        'title': 'Developing Safe ATT&CK Scenarios for Security Validation',
        'author': 'newlog',
        'description': 'This second paper is amazing',
        'link': 'thsiisthelink',
        'tags': ['slides', 'talk', 'att&ck', 'MITRE', 'post-exploitation'],
        'date': '01/10/2019'
    },
    {
        'id': 8,
        'title': 'Unpacking Malware using r2',
        'author': 'newlog',
        'description': 'This second paper is amazing',
        'link': 'thsiisthelink',
        'tags': ['training', 'slides', 'windows', 'reverse_engineering'],
        'date': '01/10/2019'
    }
]

const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
      maxWidth: '60vw',
      maxHeight: '80vh',
      marginTop: '-15vh'
    },
    displayLinebreak: {
        whiteSpace: 'pre-line',
    }
  });
  

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    var md = new Remarkable();
  
    return (
      <>
        <TableRow className={classes.root} >
            <TableCell align="left"><Link href="#" underline="none" color="inherit"><b>{row.title}</b></Link></TableCell>
            <TableCell align="right">{row.date}</TableCell>
            <TableCell align="right">
                {row.tags.map((tag) => (
                    <Chip label={tag} variant="outlined" size="small" />
                ))}
            </TableCell>
            <TableCell>
                <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)} >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </TableCell>
        </TableRow>
        <TableRow >
          <TableCell style={{ paddingBottom: 0, paddingTop: 0, border: 'none'}} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box>
                <TableCell align="left" style={{ border: 'none' }}></TableCell>
                <TableCell align="left" style={{ border: 'none' }}>
                    <div dangerouslySetInnerHTML={{__html: md.render(row.description)}}></div>
                </TableCell>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }

 const Writings = () => {
    const classes = useRowStyles();
    return (
        <>
            <Header />
            <div className="writings">
                <Box ml={8}>
                    <TableContainer component={Paper} className={classes.root}>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">title</TableCell>
                                    <TableCell align="left">published</TableCell>
                                    <TableCell align="right">tags</TableCell>
                                    <TableCell align="right">+info</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {documents.map((row) => (
                                    <Row key={row.id} row={row} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </div>
        </>
    );
}

export default Writings;
