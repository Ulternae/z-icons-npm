import React from 'react';

export interface LanFaceHeadBandageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceHeadBandageThin: React.FC<LanFaceHeadBandageThinProps>;
export default LanFaceHeadBandageThin;
