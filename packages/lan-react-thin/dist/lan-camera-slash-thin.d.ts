import React from 'react';

export interface LanCameraSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraSlashThin(props: LanCameraSlashThinProps): React.ReactElement;
export default LanCameraSlashThin;
