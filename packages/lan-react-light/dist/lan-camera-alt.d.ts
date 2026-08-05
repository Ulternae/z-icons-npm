import React from 'react';

export interface LanCameraAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraAlt(props: LanCameraAltProps): React.ReactElement;
export default LanCameraAlt;
