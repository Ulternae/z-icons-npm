import React from 'react';

export interface LanCopyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCopyRegular: React.FC<LanCopyRegularProps>;
export default LanCopyRegular;
