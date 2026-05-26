import React from 'react';

export interface LanCirclePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePlusRegular: React.FC<LanCirclePlusRegularProps>;
export default LanCirclePlusRegular;
