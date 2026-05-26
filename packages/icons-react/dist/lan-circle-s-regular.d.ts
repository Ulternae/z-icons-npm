import React from 'react';

export interface LanCircleSRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleSRegular: React.FC<LanCircleSRegularProps>;
export default LanCircleSRegular;
