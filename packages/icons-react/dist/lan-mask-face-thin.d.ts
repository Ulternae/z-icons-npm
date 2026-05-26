import React from 'react';

export interface LanMaskFaceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMaskFaceThin: React.FC<LanMaskFaceThinProps>;
export default LanMaskFaceThin;
