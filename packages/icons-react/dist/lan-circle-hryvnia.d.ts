import React from 'react';

export interface LanCircleHryvniaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHryvnia: React.FC<LanCircleHryvniaProps>;
export default LanCircleHryvnia;
