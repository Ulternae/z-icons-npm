import React from 'react';

export interface LanCrutchesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrutchesRegular: React.FC<LanCrutchesRegularProps>;
export default LanCrutchesRegular;
