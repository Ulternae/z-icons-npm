import React from 'react';

export interface LanBorderLeftRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderLeftRegular: React.FC<LanBorderLeftRegularProps>;
export default LanBorderLeftRegular;
