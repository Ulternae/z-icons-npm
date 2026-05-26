import React from 'react';

export interface LanFaceSmileTearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmileTear: React.FC<LanFaceSmileTearProps>;
export default LanFaceSmileTear;
