import React from 'react';

export interface NeoFishProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFish: React.FC<NeoFishProps>;
export default NeoFish;
