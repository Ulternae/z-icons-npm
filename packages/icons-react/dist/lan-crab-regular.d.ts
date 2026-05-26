import React from 'react';

export interface LanCrabRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrabRegular: React.FC<LanCrabRegularProps>;
export default LanCrabRegular;
