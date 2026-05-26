import React from 'react';

export interface LanCrutchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrutchRegular: React.FC<LanCrutchRegularProps>;
export default LanCrutchRegular;
