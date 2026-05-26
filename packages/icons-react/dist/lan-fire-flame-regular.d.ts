import React from 'react';

export interface LanFireFlameRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireFlameRegular: React.FC<LanFireFlameRegularProps>;
export default LanFireFlameRegular;
