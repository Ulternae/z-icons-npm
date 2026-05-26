import React from 'react';

export interface LanImagesUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImagesUserSolid: React.FC<LanImagesUserSolidProps>;
export default LanImagesUserSolid;
