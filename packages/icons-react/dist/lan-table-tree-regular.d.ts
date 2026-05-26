import React from 'react';

export interface LanTableTreeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableTreeRegular: React.FC<LanTableTreeRegularProps>;
export default LanTableTreeRegular;
