import React from 'react';

export interface LanFaceGrinTongueProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinTongue: React.FC<LanFaceGrinTongueProps>;
export default LanFaceGrinTongue;
