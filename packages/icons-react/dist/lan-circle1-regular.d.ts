import React from 'react';

export interface LanCircle1RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle1Regular: React.FC<LanCircle1RegularProps>;
export default LanCircle1Regular;
