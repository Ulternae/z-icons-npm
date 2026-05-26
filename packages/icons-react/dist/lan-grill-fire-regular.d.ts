import React from 'react';

export interface LanGrillFireRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrillFireRegular: React.FC<LanGrillFireRegularProps>;
export default LanGrillFireRegular;
