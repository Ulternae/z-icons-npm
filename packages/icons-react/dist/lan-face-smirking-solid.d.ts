import React from 'react';

export interface LanFaceSmirkingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmirkingSolid: React.FC<LanFaceSmirkingSolidProps>;
export default LanFaceSmirkingSolid;
