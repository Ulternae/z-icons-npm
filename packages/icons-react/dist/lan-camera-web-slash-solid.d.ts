import React from 'react';

export interface LanCameraWebSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraWebSlashSolid: React.FC<LanCameraWebSlashSolidProps>;
export default LanCameraWebSlashSolid;
