import React from 'react';

export interface LanCameraWebSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraWebSlash(props: LanCameraWebSlashProps): React.ReactElement;
export default LanCameraWebSlash;
