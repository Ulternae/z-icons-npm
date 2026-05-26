import React from 'react';

export interface LanCircleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleThin: React.FC<LanCircleThinProps>;
export default LanCircleThin;
