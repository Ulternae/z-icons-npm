import React from 'react';

export interface NeoTerminalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTerminalSolid: React.FC<NeoTerminalSolidProps>;
export default NeoTerminalSolid;
