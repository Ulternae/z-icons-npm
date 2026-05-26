import React from 'react';

export interface LanTentArrowLeftRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTentArrowLeftRight: React.FC<LanTentArrowLeftRightProps>;
export default LanTentArrowLeftRight;
