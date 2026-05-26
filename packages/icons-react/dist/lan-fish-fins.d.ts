import React from 'react';

export interface LanFishFinsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFishFins: React.FC<LanFishFinsProps>;
export default LanFishFins;
