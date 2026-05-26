import React from 'react';

export interface LanFaceEyesXmarksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceEyesXmarks: React.FC<LanFaceEyesXmarksProps>;
export default LanFaceEyesXmarks;
