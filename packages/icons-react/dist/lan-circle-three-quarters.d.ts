import React from 'react';

export interface LanCircleThreeQuartersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleThreeQuarters: React.FC<LanCircleThreeQuartersProps>;
export default LanCircleThreeQuarters;
