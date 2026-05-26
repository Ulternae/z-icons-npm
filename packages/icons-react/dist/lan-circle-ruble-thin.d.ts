import React from 'react';

export interface LanCircleRubleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleRubleThin: React.FC<LanCircleRubleThinProps>;
export default LanCircleRubleThin;
