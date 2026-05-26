import React from 'react';

export interface LanCircleDThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleDThin: React.FC<LanCircleDThinProps>;
export default LanCircleDThin;
