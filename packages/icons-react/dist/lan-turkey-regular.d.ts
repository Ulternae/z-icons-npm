import React from 'react';

export interface LanTurkeyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTurkeyRegular: React.FC<LanTurkeyRegularProps>;
export default LanTurkeyRegular;
