import React from 'react';

export interface LanCloneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloneSolid: React.FC<LanCloneSolidProps>;
export default LanCloneSolid;
