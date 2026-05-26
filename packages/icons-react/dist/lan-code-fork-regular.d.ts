import React from 'react';

export interface LanCodeForkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeForkRegular: React.FC<LanCodeForkRegularProps>;
export default LanCodeForkRegular;
