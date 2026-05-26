import React from 'react';

export interface LanCameraPolaroidSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraPolaroidSolid: React.FC<LanCameraPolaroidSolidProps>;
export default LanCameraPolaroidSolid;
