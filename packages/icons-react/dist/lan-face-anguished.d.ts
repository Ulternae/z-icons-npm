import React from 'react';

export interface LanFaceAnguishedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceAnguished: React.FC<LanFaceAnguishedProps>;
export default LanFaceAnguished;
