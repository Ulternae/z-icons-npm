import React from 'react';

export interface LanCameraWebSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraWebSlashRegular: React.FC<LanCameraWebSlashRegularProps>;
export default LanCameraWebSlashRegular;
