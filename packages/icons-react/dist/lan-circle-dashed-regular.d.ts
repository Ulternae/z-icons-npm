import React from 'react';

export interface LanCircleDashedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleDashedRegular: React.FC<LanCircleDashedRegularProps>;
export default LanCircleDashedRegular;
