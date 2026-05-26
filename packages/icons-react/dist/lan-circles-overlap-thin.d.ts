import React from 'react';

export interface LanCirclesOverlapThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclesOverlapThin: React.FC<LanCirclesOverlapThinProps>;
export default LanCirclesOverlapThin;
