import React from 'react';

export interface LanPipeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeRegular: React.FC<LanPipeRegularProps>;
export default LanPipeRegular;
