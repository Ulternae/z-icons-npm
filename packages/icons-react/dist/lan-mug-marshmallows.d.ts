import React from 'react';

export interface LanMugMarshmallowsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugMarshmallows: React.FC<LanMugMarshmallowsProps>;
export default LanMugMarshmallows;
