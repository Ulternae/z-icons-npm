import React from 'react';

export interface LanCircleYenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleYenThin: React.FC<LanCircleYenThinProps>;
export default LanCircleYenThin;
