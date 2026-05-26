import React from 'react';

export interface LanCameraAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraAlt: React.FC<LanCameraAltProps>;
export default LanCameraAlt;
