import React from 'react';

export interface LanFaceSmilePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmilePlus: React.FC<LanFaceSmilePlusProps>;
export default LanFaceSmilePlus;
