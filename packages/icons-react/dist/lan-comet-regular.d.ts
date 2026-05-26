import React from 'react';

export interface LanCometRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCometRegular: React.FC<LanCometRegularProps>;
export default LanCometRegular;
