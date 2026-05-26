import React from 'react';

export interface LanVirgoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVirgoRegular: React.FC<LanVirgoRegularProps>;
export default LanVirgoRegular;
