import React from 'react';

export interface LanHardDriveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHardDriveRegular: React.FC<LanHardDriveRegularProps>;
export default LanHardDriveRegular;
