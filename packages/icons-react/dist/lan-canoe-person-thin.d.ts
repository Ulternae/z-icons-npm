import React from 'react';

export interface LanCanoePersonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCanoePersonThin: React.FC<LanCanoePersonThinProps>;
export default LanCanoePersonThin;
