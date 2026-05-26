import React from 'react';

export interface LanBinaryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinaryRegular: React.FC<LanBinaryRegularProps>;
export default LanBinaryRegular;
