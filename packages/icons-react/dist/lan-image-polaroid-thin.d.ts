import React from 'react';

export interface LanImagePolaroidThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImagePolaroidThin: React.FC<LanImagePolaroidThinProps>;
export default LanImagePolaroidThin;
