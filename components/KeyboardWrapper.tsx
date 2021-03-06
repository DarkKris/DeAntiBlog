import * as React from 'react';
import '../styles/KeyboardWrapper.scss';

export default class KeyboardWrapper extends React.Component<any, any> {
  public constructor(props: any) {
    super(props);
    this.state = {}
  }

  private getKeyCode(ev: KeyboardEvent): string {
    let code = ev.code;
    code = code.replace(/Key/i, '')
               .replace(/digit/i, '')
               .replace(/period/i, 'dot')
               .replace(/meta/i, 'control');
    let strTmp = ""; //新字符串
    for(let i = 0; i < code.length; i++) {
      if (i == 0) {
        strTmp += code[i].toLowerCase();
      }else {
        strTmp += code[i];
      }
    }
    code = 'Key--'+strTmp;
    return code;
  }

  private _window: any = null;

  componentDidMount() {
    if(this._window===null) {
      window.addEventListener('keydown', (ev: KeyboardEvent) => {
        let keyCode = this.getKeyCode(ev),
            element = document.getElementById(keyCode);
        console.log(keyCode);
        console.log(element);
        if(element!==null)
          element.classList.add("Key-active");
      });

      window.addEventListener('keyup', (ev: KeyboardEvent) => {
        let keyCode = this.getKeyCode(ev),
          element = document.getElementById(keyCode);
        if(element!==null)
          element.classList.remove("Key-active");
      });
      this._window = window;
    }
  }

  public render() {
    return (
      <div className="Keyboard-wrapper">
        <div className="Keyboard">
          <svg className="Keyboard-svg"
               width="609px"
               height="240px"
               viewBox="0 0 609 242"
          >
            <g
              stroke="none"
              strokeWidth="1"
              fill="#FFFFFF"
              fillRule="evenodd"
            >
              <rect className="Key" id="Key--q" x="52" y="70" width="36" height="37" rx="6" />
              <rect className="Key" id="Key--w" x="95" y="70" width="36" height="37" rx="6" />
              <rect className="Key" id="Key--e" x="138" y="70" width="36" height="37" rx="6" />
              <rect className="Key" id="Key--r" x="182" y="70" width="36" height="37" rx="6" />
              <rect className="Key" id="Key--t" x="225" y="70" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--y" x="269" y="70" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--u" x="312" y="70" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--i" x="356" y="70" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--o" x="399" y="70" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--p" x="442" y="70" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--squareBracketLeft" x="486" y="70" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--squareBracketRight" x="529" y="70" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--backslash" x="573" y="70" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--tilde" x="1" y="25" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--1" x="44" y="25" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--2" x="88" y="25" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--3" x="131" y="25" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--4" x="175" y="25" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--5" x="218" y="25" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--6" x="262" y="25" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--7" x="305" y="25" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--8" x="348" y="25" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--9" x="392" y="25" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--0" x="435" y="25" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--minus" x="479" y="25" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--equals" x="522" y="25" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--esc" x="1" y="0" width="37" height="18" rx="6"/>
              <rect className="Key" id="Key--f1" x="45" y="0" width="37" height="18" rx="6"/>
              <rect className="Key" id="Key--f2" x="89" y="0" width="37" height="18" rx="6"/>
              <rect className="Key" id="Key--f3" x="133" y="0" width="37" height="18" rx="6"/>
              <rect className="Key" id="Key--f4" x="176" y="0" width="37" height="18" rx="6"/>
              <rect className="Key" id="Key--f5" x="221" y="0" width="37" height="18" rx="6"/>
              <rect className="Key" id="Key--f6" x="264" y="0" width="37" height="18" rx="6"/>
              <rect className="Key" id="Key--f7" x="308" y="0" width="37" height="18" rx="6"/>
              <rect className="Key" id="Key--f8" x="352" y="0" width="37" height="18" rx="6"/>
              <rect className="Key" id="Key--f9" x="396" y="0" width="37" height="18" rx="6"/>
              <rect className="Key" id="Key--f10" x="440" y="0" width="37" height="18" rx="6"/>
              <rect className="Key" id="Key--f11" x="484" y="0" width="37" height="18" rx="6"/>
              <rect className="Key" id="Key--f12" x="528" y="0" width="37" height="18" rx="6"/>
              <rect className="Key" id="Key--power" x="572" y="0" width="37" height="18" rx="6"/>
              <rect className="Key" id="Key--delete" x="566" y="25" width="43" height="37" rx="6"/>
              <rect className="Key" id="Key--a" x="65" y="114" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--s" x="109" y="114" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--d" x="152" y="114" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--f" x="195" y="114" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--g" x="239" y="114" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--h" x="282" y="114" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--j" x="326" y="114" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--k" x="369" y="114" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--l" x="413" y="114" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--semicolon" x="456" y="114" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--apostrophe" x="500" y="114" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--z" x="88" y="158" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--x" x="131" y="158" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--c" x="175" y="158" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--v" x="218" y="158" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--b" x="262" y="158" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--n" x="305" y="158" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--m" x="348" y="158" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--comma" x="392" y="158" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--dot" x="435" y="158" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--slash" x="479" y="158" width="36" height="37" rx="6"/>
              <rect className="Key" id="Key--fn" x="0" y="203" width="33" height="37" rx="6"/>
              <rect className="Key" id="Key--controlLeft" x="41" y="203" width="33" height="37" rx="6"/>
              <rect className="Key" id="Key--altLeft" x="81" y="203" width="33" height="37" rx="6"/>
              <rect className="Key" id="Key--altRight" x="444" y="203" width="33" height="37" rx="6"/>
              <rect className="Key" id="Key--arrowLeft" x="485" y="221" width="37" height="19" rx="6"/>
              <g className="Key" id="Key--arrowUp" transform="translate(529.000000, 203.000000)">
                <path d="M37,11.5 L37,6 C37,2.6862915 34.3137085,-6.08718376e-16 31,0 L6,0 L6,0 C2.6862915,6.08718376e-16 -4.05812251e-16,2.6862915 0,6 L0,6 L0,11.5 L0,19 L37,19 L37,11.5 Z" />
              </g>
              <g className="Key" id="Key--arrowDown" transform="translate(529.000000, 222.000000)">
                <path d="M37,7.5 L37,13 C37,16.3137085 34.3137085,19 31,19 L6,19 C2.6862915,19 4.05812251e-16,16.3137085 0,13 L0,7.5 L0,0 L37,0 L37,7.5 Z"/>
              </g>
              <rect className="Key" id="Key--arrowRight" x="573" y="221" width="36" height="19" rx="6"/>
              <rect className="Key" id="Key--enter" x="543" y="114" width="66" height="37" rx="6"/>
              <rect className="Key" id="Key--cmdLeft" x="122" y="203" width="45" height="37" rx="6"/>
              <rect className="Key" id="Key--cmdRight" x="392" y="203" width="45" height="37" rx="6"/>
              <rect className="Key" id="Key--shiftRight" x="522" y="158" width="87" height="37" rx="6"/>
              <rect className="Key" id="Key--tab" x="0" y="70" width="44" height="37" rx="6"/>
              <rect className="Key" id="Key--capsLock" x="0" y="114" width="57" height="37" rx="6"/>
              <rect className="Key" id="Key--shiftLeft" x="0" y="158" width="80" height="37" rx="6"/>
              <rect className="Key" id="Key--space" x="175" y="203" width="210" height="37" rx="6"/>
            </g>
          </svg>
        </div>
      </div>
    )
  }
}