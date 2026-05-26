import React from 'react';

export interface LanCameraCircleEllipsisThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraCircleEllipsisThin: React.FC<LanCameraCircleEllipsisThinProps>;
export default LanCameraCircleEllipsisThin;
