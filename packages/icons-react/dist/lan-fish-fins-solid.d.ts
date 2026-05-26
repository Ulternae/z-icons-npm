import React from 'react';

export interface LanFishFinsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFishFinsSolid: React.FC<LanFishFinsSolidProps>;
export default LanFishFinsSolid;
