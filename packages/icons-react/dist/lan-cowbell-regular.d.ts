import React from 'react';

export interface LanCowbellRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCowbellRegular: React.FC<LanCowbellRegularProps>;
export default LanCowbellRegular;
