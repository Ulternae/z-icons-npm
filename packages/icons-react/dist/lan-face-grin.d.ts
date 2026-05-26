import React from 'react';

export interface LanFaceGrinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrin: React.FC<LanFaceGrinProps>;
export default LanFaceGrin;
