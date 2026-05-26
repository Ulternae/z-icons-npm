import React from 'react';

export interface LanH2RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH2Regular: React.FC<LanH2RegularProps>;
export default LanH2Regular;
