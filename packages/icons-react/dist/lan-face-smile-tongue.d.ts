import React from 'react';

export interface LanFaceSmileTongueProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmileTongue: React.FC<LanFaceSmileTongueProps>;
export default LanFaceSmileTongue;
