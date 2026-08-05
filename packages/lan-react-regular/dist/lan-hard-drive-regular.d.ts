import React from 'react';

export interface LanHardDriveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHardDriveRegular(props: LanHardDriveRegularProps): React.ReactElement;
export default LanHardDriveRegular;
