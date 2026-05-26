import React from 'react';

export interface LanGarageOpenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGarageOpenRegular: React.FC<LanGarageOpenRegularProps>;
export default LanGarageOpenRegular;
