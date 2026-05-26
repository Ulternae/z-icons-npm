import React from 'react';

export interface LanFaceSmileThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmileThin: React.FC<LanFaceSmileThinProps>;
export default LanFaceSmileThin;
