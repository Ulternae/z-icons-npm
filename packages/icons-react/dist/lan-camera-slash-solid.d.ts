import React from 'react';

export interface LanCameraSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraSlashSolid: React.FC<LanCameraSlashSolidProps>;
export default LanCameraSlashSolid;
