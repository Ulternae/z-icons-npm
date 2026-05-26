import React from 'react';

export interface LanTrowelBricksSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrowelBricksSolid: React.FC<LanTrowelBricksSolidProps>;
export default LanTrowelBricksSolid;
