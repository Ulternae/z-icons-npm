import React from 'react';

export interface LanChildrenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChildrenRegular: React.FC<LanChildrenRegularProps>;
export default LanChildrenRegular;
