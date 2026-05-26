import React from 'react';

export interface LanFaceSmirkingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmirkingThin: React.FC<LanFaceSmirkingThinProps>;
export default LanFaceSmirkingThin;
