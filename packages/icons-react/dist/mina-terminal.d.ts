import React from 'react';

export interface MinaTerminalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTerminal: React.FC<MinaTerminalProps>;
export default MinaTerminal;
