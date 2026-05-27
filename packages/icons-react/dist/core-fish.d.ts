import React from 'react';

export interface CoreFishProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFish: React.FC<CoreFishProps>;
export default CoreFish;
