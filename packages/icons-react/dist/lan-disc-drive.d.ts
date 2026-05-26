import React from 'react';

export interface LanDiscDriveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiscDrive: React.FC<LanDiscDriveProps>;
export default LanDiscDrive;
