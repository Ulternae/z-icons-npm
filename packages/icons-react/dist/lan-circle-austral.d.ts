import React from 'react';

export interface LanCircleAustralProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleAustral: React.FC<LanCircleAustralProps>;
export default LanCircleAustral;
