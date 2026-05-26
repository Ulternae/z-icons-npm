import React from 'react';

export interface LanImagePolaroidUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImagePolaroidUserSolid: React.FC<LanImagePolaroidUserSolidProps>;
export default LanImagePolaroidUserSolid;
