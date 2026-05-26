import React from 'react';

export interface LanFaceZanySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceZanySolid: React.FC<LanFaceZanySolidProps>;
export default LanFaceZanySolid;
