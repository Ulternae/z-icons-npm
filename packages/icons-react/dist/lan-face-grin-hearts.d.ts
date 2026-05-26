import React from 'react';

export interface LanFaceGrinHeartsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinHearts: React.FC<LanFaceGrinHeartsProps>;
export default LanFaceGrinHearts;
