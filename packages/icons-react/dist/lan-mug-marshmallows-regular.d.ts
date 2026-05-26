import React from 'react';

export interface LanMugMarshmallowsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugMarshmallowsRegular: React.FC<LanMugMarshmallowsRegularProps>;
export default LanMugMarshmallowsRegular;
