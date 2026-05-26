import React from 'react';

export interface LanPlaneCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneCircleXmark: React.FC<LanPlaneCircleXmarkProps>;
export default LanPlaneCircleXmark;
