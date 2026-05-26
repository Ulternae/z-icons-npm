import React from 'react';

export interface LanRoadCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadCircleXmark: React.FC<LanRoadCircleXmarkProps>;
export default LanRoadCircleXmark;
