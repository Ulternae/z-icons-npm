import React from 'react';

export interface LanCircle4Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle4: React.FC<LanCircle4Props>;
export default LanCircle4;
