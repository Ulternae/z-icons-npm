import React from 'react';

export interface LanRightLeftRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRightLeftRegular: React.FC<LanRightLeftRegularProps>;
export default LanRightLeftRegular;
