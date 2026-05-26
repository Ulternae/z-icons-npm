import React from 'react';

export interface LanSprayCanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSprayCanRegular: React.FC<LanSprayCanRegularProps>;
export default LanSprayCanRegular;
