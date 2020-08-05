import React from 'react';
import animateScrollTo from 'animated-scroll-to';
import styled from 'styled-components';
import Item from './Item';
import archive from '../../config/archive';

const StyledArchive = styled.div`
    margin-top: 100px;
`;

class Archive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // controls all active items
      itemsExpanded: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // helper function to check if element is in the view port
  elementInViewport(el) {
    let top = el.offsetTop + 130;
    let left = el.offsetLeft;
    const width = el.offsetWidth;
    const height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top < window.pageYOffset + window.innerHeight
            && left < window.pageXOffset + window.innerWidth
            && top + height > window.pageYOffset
            && left + width > window.pageXOffset
    );
  }

  // closes all items when new one opens
  handleClick(keyParam) {
    // copying state
    const temp = this.state.itemsExpanded;
    // checking if any other archives are opened
    let othersOpened = false;
    Object.keys(archive).map((key) => (temp[key] !== 0 ? (othersOpened = true) : null));
    // setting to 0 if item is already open
    if (temp[keyParam]) {
      temp[keyParam] = 0;
    }
    // setting everything to 0 before we open item
    else if (othersOpened) {
      let closed;
      // going through array and getting opened archive
      Object.keys(archive).map((key) => (temp[key] !== 0 ? ((temp[key] = 0), (closed = key)) : null));
      // opening desired archive
      temp[keyParam] = 'auto';
      // Fixing scrolling proplem while other archive is closing
      if (parseInt(keyParam) < parseInt(closed)) {
        // checking if element content being closed is in the viewport
        if (this.elementInViewport(document.getElementById(`${closed}Content`))) {
          // scrollToPosition = [top position of item pressed] - [height of previous item content] + [offset]
          const scrollToPosition = document.getElementById(keyParam).offsetTop
                        - document.getElementById(`${closed}Content`).offsetHeight
                        + 50;
          animateScrollTo(scrollToPosition, {
            maxDuration: 500,
            minDuration: 500,
          });
        }
      }
    } else {
      temp[keyParam] = 'auto';
    }

    // setting state
    this.setState({
      itemsExpanded: temp,
    });
  }

  componentDidMount() {
    const temp = {};
    // populating state with items
    Object.keys(archive).map((key) => (temp[key] = 0));

    this.setState({
      itemsExpanded: temp,
    });
  }

  render() {
    return (
      <StyledArchive id="Archive">
        {/* Spawning items */}
        {Object.keys(archive)
          .reverse()
          .map((key) => (
            <Item
              year={key}
              color={archive[key].color}
              participants={archive[key].participants}
              projects={archive[key].projects}
              ended={archive[key].ended}
              live={archive[key].live}
              devpost={archive[key].devpost}
              website={archive[key].website}
              team={archive[key].team}
                            // handles click
              click={this.handleClick}
                            // controls whether it is expanded or not
              expanded={this.state.itemsExpanded[key]}
                            // passing over key (useless but clears warnings)
              key={key}
            />
          ))}
      </StyledArchive>
    );
  }
}

export default Archive;
