import React from 'react';

export interface LanFaceSmilePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmilePlusThin: React.FC<LanFaceSmilePlusThinProps>;
export default LanFaceSmilePlusThin;
