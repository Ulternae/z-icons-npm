import React from 'react';

export interface LanTugrikSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTugrikSignRegular: React.FC<LanTugrikSignRegularProps>;
export default LanTugrikSignRegular;
