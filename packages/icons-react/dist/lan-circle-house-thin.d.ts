import React from 'react';

export interface LanCircleHouseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHouseThin: React.FC<LanCircleHouseThinProps>;
export default LanCircleHouseThin;
