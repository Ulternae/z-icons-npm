import React from 'react';

export interface LanImagePolaroidUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImagePolaroidUser: React.FC<LanImagePolaroidUserProps>;
export default LanImagePolaroidUser;
