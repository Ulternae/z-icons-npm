import React from 'react';

export interface LanDogLeashedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDogLeashed: React.FC<LanDogLeashedProps>;
export default LanDogLeashed;
