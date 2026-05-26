import React from 'react';

export interface LanCircleAThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleAThin: React.FC<LanCircleAThinProps>;
export default LanCircleAThin;
