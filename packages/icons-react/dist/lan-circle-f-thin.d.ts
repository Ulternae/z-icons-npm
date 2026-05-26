import React from 'react';

export interface LanCircleFThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleFThin: React.FC<LanCircleFThinProps>;
export default LanCircleFThin;
