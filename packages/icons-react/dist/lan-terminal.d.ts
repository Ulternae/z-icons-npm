import React from 'react';

export interface LanTerminalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTerminal: React.FC<LanTerminalProps>;
export default LanTerminal;
