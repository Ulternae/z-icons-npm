import React from 'react';

export interface LanImagePolaroidUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImagePolaroidUserThin: React.FC<LanImagePolaroidUserThinProps>;
export default LanImagePolaroidUserThin;
