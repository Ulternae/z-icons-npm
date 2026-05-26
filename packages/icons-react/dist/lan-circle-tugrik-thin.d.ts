import React from 'react';

export interface LanCircleTugrikThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleTugrikThin: React.FC<LanCircleTugrikThinProps>;
export default LanCircleTugrikThin;
