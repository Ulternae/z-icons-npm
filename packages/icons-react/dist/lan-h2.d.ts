import React from 'react';

export interface LanH2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH2: React.FC<LanH2Props>;
export default LanH2;
