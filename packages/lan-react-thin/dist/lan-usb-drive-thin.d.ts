import React from 'react';

export interface LanUsbDriveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsbDriveThin(props: LanUsbDriveThinProps): React.ReactElement;
export default LanUsbDriveThin;
