import React from 'react';

export interface LanCameraSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraSlash(props: LanCameraSlashProps): React.ReactElement;
export default LanCameraSlash;
