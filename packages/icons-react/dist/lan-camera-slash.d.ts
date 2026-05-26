import React from 'react';

export interface LanCameraSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraSlash: React.FC<LanCameraSlashProps>;
export default LanCameraSlash;
