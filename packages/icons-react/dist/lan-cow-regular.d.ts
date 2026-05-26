import React from 'react';

export interface LanCowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCowRegular: React.FC<LanCowRegularProps>;
export default LanCowRegular;
