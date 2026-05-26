import React from 'react';

export interface LanFaceSmileHeartsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmileHearts: React.FC<LanFaceSmileHeartsProps>;
export default LanFaceSmileHearts;
