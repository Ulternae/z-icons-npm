import React from 'react';

export interface LanManatSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanManatSign: React.FC<LanManatSignProps>;
export default LanManatSign;
