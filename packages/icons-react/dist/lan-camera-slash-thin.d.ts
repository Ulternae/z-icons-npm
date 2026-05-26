import React from 'react';

export interface LanCameraSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraSlashThin: React.FC<LanCameraSlashThinProps>;
export default LanCameraSlashThin;
