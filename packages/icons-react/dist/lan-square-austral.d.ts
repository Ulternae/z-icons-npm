import React from 'react';

export interface LanSquareAustralProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareAustral: React.FC<LanSquareAustralProps>;
export default LanSquareAustral;
