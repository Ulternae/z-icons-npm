import React from 'react';

export interface LanMugMarshmallowsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugMarshmallowsThin: React.FC<LanMugMarshmallowsThinProps>;
export default LanMugMarshmallowsThin;
