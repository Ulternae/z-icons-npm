import React from 'react';

export interface NeoTerminalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTerminal: React.FC<NeoTerminalProps>;
export default NeoTerminal;
