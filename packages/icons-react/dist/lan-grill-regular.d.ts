import React from 'react';

export interface LanGrillRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrillRegular: React.FC<LanGrillRegularProps>;
export default LanGrillRegular;
