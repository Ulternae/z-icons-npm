import React from 'react';

export interface LanImagesUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImagesUser: React.FC<LanImagesUserProps>;
export default LanImagesUser;
