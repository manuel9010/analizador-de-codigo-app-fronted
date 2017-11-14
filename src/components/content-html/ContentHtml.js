import React from 'react';

import './ContentHtml.css';

class ContentHtml extends React.Component {

  render() {
    return (
      <div className="Container-card">
        <div class="row valign-wrapper">
          <div class="col s6 offset-s3 valign">
            <div class="card red darken-4">
              <div class="card-content white-text">
                <div className="Text-Container">
                  {this.props.text}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default ContentHtml