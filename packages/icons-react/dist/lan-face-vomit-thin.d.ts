import React from 'react';

export interface LanFaceVomitThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceVomitThin: React.FC<LanFaceVomitThinProps>;
export default LanFaceVomitThin;
