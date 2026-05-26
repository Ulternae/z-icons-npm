import React from 'react';

export interface LanCircle9Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle9: React.FC<LanCircle9Props>;
export default LanCircle9;
