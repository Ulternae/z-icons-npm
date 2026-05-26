import React from 'react';

export interface LanCircleTRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleTRegular: React.FC<LanCircleTRegularProps>;
export default LanCircleTRegular;
