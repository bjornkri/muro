
import React from 'react';
import ReactDOM from 'react-dom';

const DASHBOARDS = [
  {
    id: 0,
    rows: [
      {
        cols: [
          {
            tiles: [
              {
                color: '#00f',
                image: 'https://placekitten.com/500/502',
                iframe: 'https://jenkins.air.emea.group.atlascopco.com/view/Greenlights/',
              },
            ],
          },
          {
            tiles: [
              {
                color: '#0ff',
                image: 'https://placekitten.com/500/501',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    rows: [
      {
        cols: [
          {
            tiles: [
              {
                color: '#00f',
                image: 'https://placekitten.com/500/502',
              },
            ],
          },
          {
            tiles: [
              {
                color: '#0ff',
                image: 'https://placekitten.com/500/501',
              },
            ],
          },
        ],
      },
      {
        cols: [
          {
            tiles: [
              {
                color: '#00f',
                image: 'https://placekitten.com/400/430',
                iframe: 'https://elastic.air.emea.group.atlascopco.com/app/kibana#/dashboard/Metricbeat-system-overview?_g=()&_a=(description:\'\',filters:!(),fullScreenMode:!f,options:(darkTheme:!f),panels:!((col:1,id:System-Navigation,panelIndex:9,row:1,size_x:12,size_y:1,type:visualization),(col:1,id:c6f2ffd0-4d17-11e7-a196-69b9a7a020a9,panelIndex:11,row:2,size_x:2,size_y:2,type:visualization),(col:7,id:fe064790-1b1f-11e7-bec4-a5e9ec5cab8b,panelIndex:12,row:4,size_x:6,size_y:5,type:visualization),(col:1,id:\'855899e0-1b1c-11e7-b09e-037021c4f8df\',panelIndex:13,row:4,size_x:6,size_y:5,type:visualization),(col:1,id:\'7cdb1330-4d1a-11e7-a196-69b9a7a020a9\',panelIndex:14,row:9,size_x:12,size_y:6,type:visualization),(col:9,id:\'522ee670-1b92-11e7-bec4-a5e9ec5cab8b\',panelIndex:16,row:2,size_x:2,size_y:2,type:visualization),(col:11,id:\'1aae9140-1b93-11e7-8ada-3df93aab833e\',panelIndex:17,row:2,size_x:2,size_y:2,type:visualization),(col:7,id:\'825fdb80-4d1d-11e7-b5f2-2b7c1895bf32\',panelIndex:18,row:2,size_x:2,size_y:2,type:visualization),(col:5,id:d3166e80-1b91-11e7-bec4-a5e9ec5cab8b,panelIndex:19,row:2,size_x:2,size_y:2,type:visualization),(col:3,id:\'83e12df0-1b91-11e7-bec4-a5e9ec5cab8b\',panelIndex:20,row:2,size_x:2,size_y:2,type:visualization)),query:(language:lucene,query:(query_string:(analyze_wildcard:!t,default_field:\'*\',query:\'*\'))),timeRestore:!f,title:\'%5BMetricbeat%20System%5D%20Overview\',uiState:(P-11:(vis:(defaultColors:(\'0%20-%20100\':\'rgb(0,104,55)\'))),P-12:(vis:(defaultColors:(\'0%20-%20100\':\'rgb(0,104,55)\'))),P-14:(vis:(defaultColors:(\'0%25%20-%2015%25\':\'rgb(247,252,245)\',\'15%25%20-%2030%25\':\'rgb(199,233,192)\',\'30%25%20-%2045%25\':\'rgb(116,196,118)\',\'45%25%20-%2060%25\':\'rgb(35,139,69)\'))),P-16:(vis:(defaultColors:(\'0%20-%20100\':\'rgb(0,104,55)\'))),P-2:(vis:(defaultColors:(\'0%20-%20100\':\'rgb(0,104,55)\'))),P-3:(vis:(defaultColors:(\'0%20-%20100\':\'rgb(0,104,55)\')))),viewMode:view)',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    rows: [
      {
        cols: [
          {
            tiles: [
              {
                color: '#ff0',
                image: 'https://placekitten.com/501/502',
                iframe: 'https://elastic.air.emea.group.atlascopco.com/app/kibana#/dashboard/Metricbeat-system-overview?_g=()&_a=(description:\'\',filters:!(),fullScreenMode:!f,options:(darkTheme:!f),panels:!((col:1,id:System-Navigation,panelIndex:9,row:1,size_x:12,size_y:1,type:visualization),(col:1,id:c6f2ffd0-4d17-11e7-a196-69b9a7a020a9,panelIndex:11,row:2,size_x:2,size_y:2,type:visualization),(col:7,id:fe064790-1b1f-11e7-bec4-a5e9ec5cab8b,panelIndex:12,row:4,size_x:6,size_y:5,type:visualization),(col:1,id:\'855899e0-1b1c-11e7-b09e-037021c4f8df\',panelIndex:13,row:4,size_x:6,size_y:5,type:visualization),(col:1,id:\'7cdb1330-4d1a-11e7-a196-69b9a7a020a9\',panelIndex:14,row:9,size_x:12,size_y:6,type:visualization),(col:9,id:\'522ee670-1b92-11e7-bec4-a5e9ec5cab8b\',panelIndex:16,row:2,size_x:2,size_y:2,type:visualization),(col:11,id:\'1aae9140-1b93-11e7-8ada-3df93aab833e\',panelIndex:17,row:2,size_x:2,size_y:2,type:visualization),(col:7,id:\'825fdb80-4d1d-11e7-b5f2-2b7c1895bf32\',panelIndex:18,row:2,size_x:2,size_y:2,type:visualization),(col:5,id:d3166e80-1b91-11e7-bec4-a5e9ec5cab8b,panelIndex:19,row:2,size_x:2,size_y:2,type:visualization),(col:3,id:\'83e12df0-1b91-11e7-bec4-a5e9ec5cab8b\',panelIndex:20,row:2,size_x:2,size_y:2,type:visualization)),query:(language:lucene,query:(query_string:(analyze_wildcard:!t,default_field:\'*\',query:\'*\'))),timeRestore:!f,title:\'%5BMetricbeat%20System%5D%20Overview\',uiState:(P-11:(vis:(defaultColors:(\'0%20-%20100\':\'rgb(0,104,55)\'))),P-12:(vis:(defaultColors:(\'0%20-%20100\':\'rgb(0,104,55)\'))),P-14:(vis:(defaultColors:(\'0%25%20-%2015%25\':\'rgb(247,252,245)\',\'15%25%20-%2030%25\':\'rgb(199,233,192)\',\'30%25%20-%2045%25\':\'rgb(116,196,118)\',\'45%25%20-%2060%25\':\'rgb(35,139,69)\'))),P-16:(vis:(defaultColors:(\'0%20-%20100\':\'rgb(0,104,55)\'))),P-2:(vis:(defaultColors:(\'0%20-%20100\':\'rgb(0,104,55)\'))),P-3:(vis:(defaultColors:(\'0%20-%20100\':\'rgb(0,104,55)\')))),viewMode:view)',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    rows: [
      {
        cols: [
          {
            tiles: [
              {
                color: '#ff0',
                image: 'https://placekitten.com/501/502',
                iframe: 'https://jenkins.air.emea.group.atlascopco.com/view/Greenlights/',
              },
            ],
          },
        ],
      },
    ],
  },
];


const DashBoardCol = (props) => (
  <div className="db-col">
    { props.tiles.map(tile => (
      <div
        className="db-tile"
        style={{
          backgroundColor: tile.color,
          backgroundImage: 'url("' + tile.image + '")',
        }}
      >
        { tile.iframe ? <iframe src={tile.iframe} width="100%" height="100%" /> : '' }
      </div>
    ))}
  </div>
);


const DashBoardRow = (props) => (
  <div className="db-row">
    { props.cols.map(col => (
      <DashBoardCol
        tiles={col.tiles}
      />
    ))}
  </div>
);


const DashBoard = (props) => (
  <div className={'db' + (props.currentScreen === props.db.id ? '' : ' hidden')}>
    { props.db.rows.map(row => (
      <DashBoardRow
        cols={row.cols}
      />
    ))}
  </div>
);


class DashBoardWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 0,
      timer: null,
    };
  };

  componentDidMount() {
    let timer = setInterval(this.tick.bind(this), 10000);
    this.setState({timer});
  }
  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  rotateScreen() {
    this.setState({
      currentScreen: (this.state.currentScreen + 1) % DASHBOARDS.length,
    }, console.log(this.state.currentScreen));
  }

  tick() {
    this.rotateScreen();
  }


  render() {
    return (
      <div className="db-wrapper" onClick={() => this.rotateScreen()}>
        { DASHBOARDS.map(db => {
          return <DashBoard
            db={db}
            currentScreen={this.state.currentScreen}
          />;
        })};
      </div>
    );
  }
}


const App = () => (
  <div id="content">
    <DashBoardWrapper />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
