import React from 'react';

export interface LanCircleFRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleFRegular: React.FC<LanCircleFRegularProps>;
export default LanCircleFRegular;
