import React from 'react';

export interface LanFaceSmileTongueThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmileTongueThin: React.FC<LanFaceSmileTongueThinProps>;
export default LanFaceSmileTongueThin;
