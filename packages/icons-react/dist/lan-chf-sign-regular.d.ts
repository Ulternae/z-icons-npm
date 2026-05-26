import React from 'react';

export interface LanChfSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChfSignRegular: React.FC<LanChfSignRegularProps>;
export default LanChfSignRegular;
