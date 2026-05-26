import React from 'react';

export interface LanFaceVomitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceVomit: React.FC<LanFaceVomitProps>;
export default LanFaceVomit;
