import React from 'react';

export interface LanTally3Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTally3: React.FC<LanTally3Props>;
export default LanTally3;
