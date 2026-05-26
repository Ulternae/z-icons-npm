import React from 'react';

export interface LanGrateRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrateRegular: React.FC<LanGrateRegularProps>;
export default LanGrateRegular;
