import React from 'react';

export interface LanCameraWebSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraWebSlash: React.FC<LanCameraWebSlashProps>;
export default LanCameraWebSlash;
