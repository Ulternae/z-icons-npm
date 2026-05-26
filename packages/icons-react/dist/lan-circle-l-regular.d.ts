import React from 'react';

export interface LanCircleLRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleLRegular: React.FC<LanCircleLRegularProps>;
export default LanCircleLRegular;
