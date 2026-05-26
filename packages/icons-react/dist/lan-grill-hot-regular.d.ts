import React from 'react';

export interface LanGrillHotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrillHotRegular: React.FC<LanGrillHotRegularProps>;
export default LanGrillHotRegular;
