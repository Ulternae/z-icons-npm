import React from 'react';

export interface LanHardDriveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHardDrive(props: LanHardDriveProps): React.ReactElement;
export default LanHardDrive;
