import React from 'react';

export interface LanCircleAmpersandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleAmpersand: React.FC<LanCircleAmpersandProps>;
export default LanCircleAmpersand;
