import React from 'react';

export interface LanWindowRestoreSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowRestoreSolid: React.FC<LanWindowRestoreSolidProps>;
export default LanWindowRestoreSolid;
