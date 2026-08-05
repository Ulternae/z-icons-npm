import React from 'react';

export interface LanCameraSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraSlashRegular(props: LanCameraSlashRegularProps): React.ReactElement;
export default LanCameraSlashRegular;
