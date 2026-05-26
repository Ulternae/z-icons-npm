import React from 'react';

export interface LanSaxophoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSaxophoneSolid: React.FC<LanSaxophoneSolidProps>;
export default LanSaxophoneSolid;
