import React from 'react';

export interface LanSquareBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareBoltRegular: React.FC<LanSquareBoltRegularProps>;
export default LanSquareBoltRegular;
