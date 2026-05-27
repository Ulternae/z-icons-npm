import React from 'react';

export interface CoreHardDriveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreHardDrive: React.FC<CoreHardDriveProps>;
export default CoreHardDrive;
