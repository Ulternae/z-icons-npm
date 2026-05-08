import React from 'react';

export interface MinaTerminalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTerminalSolid: React.FC<MinaTerminalSolidProps>;
export default MinaTerminalSolid;
