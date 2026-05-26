import React from 'react';

export interface LanUpRightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpRightRegular: React.FC<LanUpRightRegularProps>;
export default LanUpRightRegular;
