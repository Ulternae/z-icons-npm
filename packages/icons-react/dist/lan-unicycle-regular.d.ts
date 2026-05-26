import React from 'react';

export interface LanUnicycleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUnicycleRegular: React.FC<LanUnicycleRegularProps>;
export default LanUnicycleRegular;
