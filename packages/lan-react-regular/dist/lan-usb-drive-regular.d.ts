import React from 'react';

export interface LanUsbDriveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsbDriveRegular(props: LanUsbDriveRegularProps): React.ReactElement;
export default LanUsbDriveRegular;
