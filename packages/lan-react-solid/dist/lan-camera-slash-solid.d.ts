import React from 'react';

export interface LanCameraSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraSlashSolid(props: LanCameraSlashSolidProps): React.ReactElement;
export default LanCameraSlashSolid;
