import React from 'react';

export interface LanMercurySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMercurySolid: React.FC<LanMercurySolidProps>;
export default LanMercurySolid;
