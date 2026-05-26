import React from 'react';

export interface LanCirclePRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePRegular: React.FC<LanCirclePRegularProps>;
export default LanCirclePRegular;
