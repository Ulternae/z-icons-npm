import React from 'react';

export interface LanCameraCircleEllipsisProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraCircleEllipsis: React.FC<LanCameraCircleEllipsisProps>;
export default LanCameraCircleEllipsis;
