import React from 'react';

export interface LanChevronCircleUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChevronCircleUp: React.FC<LanChevronCircleUpProps>;
export default LanChevronCircleUp;
