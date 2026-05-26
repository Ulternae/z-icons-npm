import React from 'react';

export interface LanCircleRupeeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleRupeeThin: React.FC<LanCircleRupeeThinProps>;
export default LanCircleRupeeThin;
