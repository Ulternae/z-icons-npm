import React from 'react';

export interface LanH3Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH3: React.FC<LanH3Props>;
export default LanH3;
