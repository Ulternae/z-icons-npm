import React from 'react';

export interface LanUsbDriveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsbDriveSolid(props: LanUsbDriveSolidProps): React.ReactElement;
export default LanUsbDriveSolid;
