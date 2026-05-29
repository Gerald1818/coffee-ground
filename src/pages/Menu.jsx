import React, { useEffect, useRef } from 'react';
import aboutBg from '../assets/about-bg.png';
import bevData from '../data/menuData.json';
import '../App.css';

/* ─── Appetizers section ──────────────────────────────────────────── */
const AppetizersSection = ({ data }) => (
  <div className="app-section">
    <div className="app-arch-card">
      <h2 className="app-title">{data.title}</h2>
      <div className="normal-divider" />

      <div className="app-inner">
        <ul className="app-list">
          {data.items.map((item, i) => (
            <li className="app-row" key={i}>
              <div className="app-row-left">
                <span className="app-item-name">{item.name}</span>
                <span className="app-item-desc">{item.desc}</span>
              </div>
              <div className="app-row-divider" />
              <span className="app-item-price">{item.price}</span>
            </li>
          ))}
        </ul>

        {/* Add-Ons box — bottom right */}
        <div className="app-addons-box">
          <span className="app-addons-title">{data.addOns.title}:</span>
          <ul className="app-addons-list">
            {data.addOns.items.map((addon, i) => (
              <li key={i} className="app-addon-row">
                <span className="app-addon-name">{addon.name}</span>
                <span className="app-addon-price">{addon.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Sandwich & Salad Consolidated Section ───────────────────────── */
const SandwichAndSaladSection = ({ sandwichData, saladData }) => (
  <div className="app-section">
    <div className="app-arch-card">
      {/* --- Sandwich Subsection --- */}
      <h2 className="app-title">{sandwichData.title}</h2>
      <div className="normal-divider" />
      <div className="app-inner" style={{ marginBottom: '2.5rem' }}>
        <ul className="app-list">
          {sandwichData.items.map((item, i) => (
            <li className="app-row" key={i}>
              <div className="app-row-left">
                <span className="app-item-name">{item.name}</span>
                <span className="app-item-desc">{item.desc}</span>
              </div>
              <div className="app-row-divider" />
              <span className="app-item-price">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* --- Salad Subsection --- */}
      <h2 className="app-title">{saladData.title}</h2>
      <div className="normal-divider" />
      <div className="app-inner">
        <ul className="app-list">
          {saladData.items.map((item, i) => (
            <li className="app-row" key={i}>
              <div className="app-row-left">
                <span className="app-item-name">{item.name}</span>
                <span className="app-item-desc">{item.desc}</span>
              </div>
              <div className="app-row-divider" />
              <span className="app-item-price">{item.price}</span>
            </li>
          ))}
        </ul>

        {/* Salad Add-Ons Box — bottom right */}
        {saladData.addOns && (
          <div className="app-addons-box">
            <span className="app-addons-title">{saladData.addOns.title}:</span>
            <ul className="app-addons-list">
              {saladData.addOns.items.map((addon, i) => (
                <li key={i} className="app-addon-row">
                  <span className="app-addon-name">{addon.name}</span>
                  <span className="app-addon-price">{addon.price}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>
);

/* ─── Pasta Section ───────────────────────────────────────────────── */
const PastaSection = ({ data }) => (
  <div className="app-section">
    <div className="app-arch-card">
      <h2 className="app-title">{data.title}</h2>
      <div className="normal-divider" />

      <div className="app-inner">
        <ul className="app-list">
          {data.items.map((item, i) => (
            <li className="app-row" key={i}>
              <div className="app-row-left">
                <span className="app-item-name">{item.name}</span>
                <span className="app-item-desc">{item.desc}</span>
              </div>
              <div className="app-row-divider" />
              <span className="app-item-price">{item.price}</span>
            </li>
          ))}
        </ul>

        {/* Add-Ons box — bottom right */}
        {data.addOns && (
          <div className="app-addons-box">
            <span className="app-addons-title">{data.addOns.title}:</span>
            <ul className="app-addons-list">
              {data.addOns.items.map((addon, i) => (
                <li key={i} className="app-addon-row">
                  <span className="app-addon-name">{addon.name}</span>
                  <span className="app-addon-price">{addon.price}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>
);

/* ─── All-Day Breakfast Section ───────────────────────────────────── */
const AllDayBreakfastSection = ({ data }) => (
  <div className="app-section">
    <div className="app-arch-card">
      <h2 className="app-title" style={{ fontSize: '2rem', letterSpacing: '0.1em' }}>
        {data.title}
      </h2>
      <div className="normal-divider" />

      <div className="app-inner">
        <ul className="app-list">
          {data.items.map((item, i) => (
            <li className="app-row" key={i}>
              <div className="app-row-left">
                <span className="app-item-name">{item.name}</span>
                <span className="app-item-desc">{item.desc}</span>
              </div>
              <div className="app-row-divider" />
              <span className="app-item-price">{item.price}</span>
            </li>
          ))}
        </ul>

        {/* Add-Ons box — bottom right */}
        {data.addOns && (
          <div className="app-addons-box">
            <span className="app-addons-title">{data.addOns.title}:</span>
            <ul className="app-addons-list">
              {data.addOns.items.map((addon, i) => (
                <li key={i} className="app-addon-row">
                  <span className="app-addon-name">{addon.name}</span>
                  <span className="app-addon-price">{addon.price}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>
);

/* ─── Rice Meals Section (NEW) ────────────────────────────────────── */
const RiceMealsSection = ({ data }) => (
  <div className="app-section">
    <div className="app-arch-card">
      <h2 className="app-title">
        {data.title}
      </h2>
      <div className="normal-divider" />

      <div className="app-inner">
        <ul className="app-list">
          {data.items.map((item, i) => (
            <li className="app-row" key={i}>
              <div className="app-row-left">
                <span className="app-item-name">{item.name}</span>
                <span className="app-item-desc">{item.desc}</span>
              </div>
              <div className="app-row-divider" />
              <span className="app-item-price">{item.price}</span>
            </li>
          ))}
        </ul>

        {/* Add-Ons box — bottom right */}
        {data.addOns && (
          <div className="app-addons-box">
            <span className="app-addons-title">{data.addOns.title}:</span>
            <ul className="app-addons-list">
              {data.addOns.items.map((addon, i) => (
                <li key={i} className="app-addon-row">
                  <span className="app-addon-name">{addon.name}</span>
                  <span className="app-addon-price">{addon.price}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>
);

/* ─── Reusable table renderer ─────────────────────────────────────── */
const BevTable = ({ data }) => (
  <table className="menu-table">
    <thead>
      <tr>
        <th></th>
        {data.headers.map((header, i) => (
          <th key={i}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.items.map((item, i) => (
        <tr key={i}>
          <td>{item.name}</td>
          {item.prices.map((price, j) => (
            <td key={j}>{price !== null ? price : '—'}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

/* ─── Refreshers & Cocktails split card ──────────────────────────── */
const RefreshersAndCocktailsCard = ({ data }) => {
  const { sizeLabel, refreshers, cocktails } = data;
  return (
    <div className="menu-subcard refreshers-cocktails-card">
      <p className="rc-size-label">{sizeLabel}</p>
      <div className="normal-divider" />
      <div className="rc-split">
        <div className="rc-col">
          <h3 className="rc-col-title">{refreshers.title}</h3>
          {refreshers.items.map((item, i) => (
            <div className="rc-row" key={i}>
              <span className="rc-name">{item.name}</span>
              <strong className="rc-price">{item.price}</strong>
            </div>
          ))}
        </div>
        <div className="rc-divider" />
        <div className="rc-col">
          <h3 className="rc-col-title">{cocktails.title}</h3>
          {cocktails.items.map((item, i) => (
            <div className="rc-row" key={i}>
              <span className="rc-name">{item.name}</span>
              <strong className="rc-price">{item.price}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Reusable add-ons card renderer ─────────────────────────────── */
const AddOnsCard = ({ addOns }) => (
  <div className="menu-subcard addons-card">
    <h3 className="menu-subsection-title centered">{addOns.title}</h3>
    <div className="normal-divider" />
    <div className="addons-grid">
      {addOns.items.map((addon, i) => (
        <div className="addon-row" key={i}>
          <span>{addon.name}</span>
          <strong>{addon.price}</strong>
        </div>
      ))}
    </div>
  </div>
);

/* ─── Matcha Table — vertical dividers between price cols ─────────── */
const MatchaTable = ({ data }) => (
  <table className="menu-table matcha-table">
    <thead>
      <tr>
        <th></th>
        {data.headers.map((header, i) => (
          <th key={i}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.items.map((item, i) => (
        <tr key={i}>
          <td>{item.name}</td>
          {item.prices.map((price, j) => (
            <td key={j} className="matcha-price-cell">
              {price !== null ? price : '—'}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

/* ─── Ice & Sugar level footer ────────────────────────────────────── */
const MatchaFooter = ({ iceLevel, sugarLevel }) => (
  <div className="matcha-footer">
    {/* Ice Level cup */}
    <div className="matcha-footer-col">
      <span className="matcha-footer-label">Level<br />of Ice</span>
      <div className="matcha-cup">
        {iceLevel.map((lvl, i) => (
          <div key={i} className="matcha-cup-row">{lvl}</div>
        ))}
      </div>
    </div>

    {/* Sugar Level cup */}
    <div className="matcha-footer-col matcha-footer-right">
      <div className="matcha-cup">
        {sugarLevel.map((lvl, i) => (
          <div key={i} className="matcha-cup-row">{lvl}</div>
        ))}
      </div>
      <span className="matcha-footer-label">Sugar<br />Level</span>
    </div>
  </div>
);

/* ─── Main Menu Component ─────────────────────────────────────────── */
const Menu = () => {
  const { 
    coffeeBased, 
    nonCoffeeBased, 
    blended, 
    blendedNonCoffee, 
    matchaSeries, 
    sandwich, 
    salad, 
    pasta,
    allDayBreakfast,
    riceMeals,
    appetizers 
  } = bevData;

  const containerRef = useRef(null);

  useEffect(() => {
    const targets = containerRef.current?.querySelectorAll('[data-animate]');
    if (!targets) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('menu-animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="menu-page-container"
      ref={containerRef}
      style={{
        backgroundImage: `linear-gradient(rgba(26, 15, 10, 0.85), rgba(26, 15, 10, 0.85)), url(${aboutBg})`,
      }}
    >
      <div className="menu-glass-card">

        {/* ── Page Title ── */}
        <h1 className="menu-main-title" data-animate style={{ '--menu-delay': '0ms' }}>
          Our Menu
        </h1>
        <div className="title-underline" data-animate style={{ '--menu-delay': '80ms' }} />

        {/* ════════════════════════════════════════════
            SECTION 1 — BEVERAGES
        ════════════════════════════════════════════ */}
        <div className="menu-split-layout" data-animate style={{ '--menu-delay': '160ms' }}>
          <div className="menu-column-left coffee-arch-card">
            <h2 className="menu-section-header arched-text">Beverages</h2>
            <h3 className="menu-subsection-title">{coffeeBased.title}</h3>
            <div className="normal-divider" />
            <BevTable data={coffeeBased} />
          </div>
          <div className="menu-column-right">
            <div className="menu-subcard">
              <h3 className="menu-subsection-title">{nonCoffeeBased.title}</h3>
              <div className="normal-divider" />
              <BevTable data={nonCoffeeBased} />
            </div>
            <AddOnsCard addOns={coffeeBased.addOns} />
          </div>
        </div>

        {/* ════════════════════════════════════════════
            SECTION 2 — BLENDED
        ════════════════════════════════════════════ */}
        <div className="menu-section-divider" data-animate style={{ '--menu-delay': '0ms' }} />
        <div className="menu-split-layout" data-animate style={{ '--menu-delay': '80ms' }}>
          <div className="menu-column-left coffee-arch-card">
            <h2 className="menu-section-header arched-text">Blended</h2>
            <h3 className="menu-subsection-title">{blended.title}</h3>
            <div className="normal-divider" />
            <BevTable data={blended} />
          </div>
          <div className="menu-column-right">
            <div className="menu-subcard">
              <h3 className="menu-subsection-title">{blendedNonCoffee.title}</h3>
              <div className="normal-divider" />
              <BevTable data={blendedNonCoffee} />
            </div>
            <RefreshersAndCocktailsCard data={blended.refreshersAndCocktails} />
          </div>
        </div>

        {/* ════════════════════════════════════════════
            SECTION 3 — MATCHA SERIES
        ════════════════════════════════════════════ */}
        <div className="menu-section-divider" data-animate style={{ '--menu-delay': '0ms' }} />
        <div className="matcha-section" data-animate style={{ '--menu-delay': '80ms' }}>
          <div className="matcha-arch-card">
            <h2 className="matcha-title">Matcha Series</h2>
            <div className="matcha-divider" />
            <MatchaTable data={matchaSeries} />
            <MatchaFooter
              iceLevel={matchaSeries.iceLevel}
              sugarLevel={matchaSeries.sugarLevel}
            />
          </div>
        </div>

        {/* ════════════════════════════════════════════
            SECTION 4 — APPETIZERS
        ════════════════════════════════════════════ */}
        <div className="menu-section-divider" data-animate style={{ '--menu-delay': '0ms' }} />
        <div data-animate style={{ '--menu-delay': '80ms' }}>
          <AppetizersSection data={appetizers}/>
        </div>

        {/* ════════════════════════════════════════════
            SECTION 5 — SANDWICH & SALAD
        ════════════════════════════════════════════ */}
        {sandwich && salad && (
          <>
            <div className="menu-section-divider" data-animate style={{ '--menu-delay': '0ms' }} />
            <div data-animate style={{ '--menu-delay': '80ms' }}>
              <SandwichAndSaladSection sandwichData={sandwich} saladData={salad} />
            </div>
          </>
        )}

        {/* ════════════════════════════════════════════
            SECTION 6 — PASTA
        ════════════════════════════════════════════ */}
        {pasta && (
          <>
            <div className="menu-section-divider" data-animate style={{ '--menu-delay': '0ms' }} />
            <div data-animate style={{ '--menu-delay': '80ms' }}>
              <PastaSection data={pasta} />
            </div>
          </>
        )}

        {/* ════════════════════════════════════════════
            SECTION 7 — ALL-DAY BREAKFAST
        ════════════════════════════════════════════ */}
        {allDayBreakfast && (
          <>
            <div className="menu-section-divider" data-animate style={{ '--menu-delay': '0ms' }} />
            <div data-animate style={{ '--menu-delay': '80ms' }}>
              <AllDayBreakfastSection data={allDayBreakfast} />
            </div>
          </>
        )}

        {/* ════════════════════════════════════════════
            SECTION 8 — RICE MEALS
        ════════════════════════════════════════════ */}
        {riceMeals && (
          <>
            <div className="menu-section-divider" data-animate style={{ '--menu-delay': '0ms' }} />
            <div data-animate style={{ '--menu-delay': '80ms' }}>
              <RiceMealsSection data={riceMeals} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;