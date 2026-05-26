import React from 'react';

export interface LanTRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTRegular: React.FC<LanTRegularProps>;
export default LanTRegular;
