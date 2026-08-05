import React from 'react';

export interface MinaHardDriveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHardDrive(props: MinaHardDriveProps): React.ReactElement;
export default MinaHardDrive;
