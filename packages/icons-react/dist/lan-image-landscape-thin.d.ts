import React from 'react';

export interface LanImageLandscapeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageLandscapeThin: React.FC<LanImageLandscapeThinProps>;
export default LanImageLandscapeThin;
