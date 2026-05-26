import React from 'react';

export interface LanCircleTThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleTThin: React.FC<LanCircleTThinProps>;
export default LanCircleTThin;
