import React from 'react';

export interface LanRepublicanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRepublican: React.FC<LanRepublicanProps>;
export default LanRepublican;
