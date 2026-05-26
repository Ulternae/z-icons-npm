import React from 'react';

export interface LanCRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCRegular: React.FC<LanCRegularProps>;
export default LanCRegular;
