import React from 'react';

export interface LanCircleRRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleRRegular: React.FC<LanCircleRRegularProps>;
export default LanCircleRRegular;
