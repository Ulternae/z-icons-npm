import React from 'react';

export interface LanMarsStrokeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsStrokeThin: React.FC<LanMarsStrokeThinProps>;
export default LanMarsStrokeThin;
