import React from 'react';

export interface LanFaceThinkingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceThinkingSolid: React.FC<LanFaceThinkingSolidProps>;
export default LanFaceThinkingSolid;
