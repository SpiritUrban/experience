import React, { useState } from 'react';
import type { FC } from 'react';
import Cart1 from '../../components/Cart-1/Cart1';
import Timeline from '../../components/Timeline/Timeline';
import TechnologiesList from '../../components/TechnologiesList/TechnologiesList';
import TechnologiesProgress from '../../components/TechnologiesProgress/TechnologiesProgress';
import './Home.css';

const Home: FC = () => {
  const [isRightOpen, setIsRightOpen] = useState(false);

  return (
    <div className="base-container">
      <div className="left">
        <TechnologiesList />
      </div>
      <div className="center">
        <div>
          <Cart1 />

          {/* Content that will be scrolled */}
          <div className="content-spacer">
            {Array.from({ length: 0 }).map((_, i) => (
              <React.Fragment key={i}>
                <br />
                <hr />
                ХХХ
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="section-container">
          <h2 className="section-title">Work Experience</h2>
          <Timeline />
        </div>
      </div>
      <div
        id="right-panel"
        className={`right ${isRightOpen ? 'open' : ''}`}
        role="dialog"
      >
        <button
          type="button"
          className="right-close"
          aria-label="Close details panel"
          onClick={() => setIsRightOpen(false)}
        >
          ✕
        </button>
        <TechnologiesProgress />
      </div>

      {/* Mobile spine trigger */}
      <button
        type="button"
        className="right-spine"
        aria-label="Открыть панель прогресса"
        aria-controls="right-panel"
        onClick={() => setIsRightOpen(true)}
      >
        <span className="right-spine-label" title="Открыть панель прогресса">Open Progress Panel</span>
      </button>
    </div>
  );
};

export default Home;
