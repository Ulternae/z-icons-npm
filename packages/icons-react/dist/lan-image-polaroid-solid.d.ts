import React from 'react';

export interface LanImagePolaroidSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImagePolaroidSolid: React.FC<LanImagePolaroidSolidProps>;
export default LanImagePolaroidSolid;
