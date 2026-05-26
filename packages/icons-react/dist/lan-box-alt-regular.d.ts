import React from 'react';

export interface LanBoxAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxAltRegular: React.FC<LanBoxAltRegularProps>;
export default LanBoxAltRegular;
