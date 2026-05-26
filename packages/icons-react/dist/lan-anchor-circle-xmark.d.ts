import React from 'react';

export interface LanAnchorCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAnchorCircleXmark: React.FC<LanAnchorCircleXmarkProps>;
export default LanAnchorCircleXmark;
