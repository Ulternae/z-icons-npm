import React from 'react';

export interface LanMugMarshmallowsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugMarshmallowsSolid: React.FC<LanMugMarshmallowsSolidProps>;
export default LanMugMarshmallowsSolid;
