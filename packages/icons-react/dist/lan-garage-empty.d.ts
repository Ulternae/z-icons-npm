import React from 'react';

export interface LanGarageEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGarageEmpty: React.FC<LanGarageEmptyProps>;
export default LanGarageEmpty;
