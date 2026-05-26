import React from 'react';

export interface LanFaceKissSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceKissSolid: React.FC<LanFaceKissSolidProps>;
export default LanFaceKissSolid;
