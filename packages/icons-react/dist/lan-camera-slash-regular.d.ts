import React from 'react';

export interface LanCameraSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraSlashRegular: React.FC<LanCameraSlashRegularProps>;
export default LanCameraSlashRegular;
