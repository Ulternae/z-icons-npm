import React from 'react';

export interface CoreHardDriveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreHardDrive(props: CoreHardDriveProps): React.ReactElement;
export default CoreHardDrive;
