import React from 'react';

export interface LanCircleDongRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleDongRegular: React.FC<LanCircleDongRegularProps>;
export default LanCircleDongRegular;
