import React from 'react';

export interface LanRocketVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRocketVertical: React.FC<LanRocketVerticalProps>;
export default LanRocketVertical;
