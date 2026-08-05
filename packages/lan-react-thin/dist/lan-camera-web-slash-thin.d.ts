import React from 'react';

export interface LanCameraWebSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraWebSlashThin(props: LanCameraWebSlashThinProps): React.ReactElement;
export default LanCameraWebSlashThin;
