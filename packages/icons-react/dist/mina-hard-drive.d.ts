import React from 'react';

export interface MinaHardDriveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHardDrive: React.FC<MinaHardDriveProps>;
export default MinaHardDrive;
