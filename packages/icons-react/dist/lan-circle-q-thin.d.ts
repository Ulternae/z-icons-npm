import React from 'react';

export interface LanCircleQThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleQThin: React.FC<LanCircleQThinProps>;
export default LanCircleQThin;
