import React from 'react';

export interface LanHillRockslideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHillRockslideRegular: React.FC<LanHillRockslideRegularProps>;
export default LanHillRockslideRegular;
