import React from 'react';

export interface LanFaceSmilePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmilePlusSolid: React.FC<LanFaceSmilePlusSolidProps>;
export default LanFaceSmilePlusSolid;
