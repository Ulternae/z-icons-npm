import React from 'react';

export interface LanUsbDriveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsbDrive(props: LanUsbDriveProps): React.ReactElement;
export default LanUsbDrive;
