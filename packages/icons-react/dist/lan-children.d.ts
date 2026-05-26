import React from 'react';

export interface LanChildrenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChildren: React.FC<LanChildrenProps>;
export default LanChildren;
