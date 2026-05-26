import React from 'react';

export interface LanCircleBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleBoltRegular: React.FC<LanCircleBoltRegularProps>;
export default LanCircleBoltRegular;
