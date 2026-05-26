import React from 'react';

export interface LanChevronCircleLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChevronCircleLeft: React.FC<LanChevronCircleLeftProps>;
export default LanChevronCircleLeft;
