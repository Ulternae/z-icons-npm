import React from 'react';

export interface LanCardSpadeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardSpade: React.FC<LanCardSpadeProps>;
export default LanCardSpade;
