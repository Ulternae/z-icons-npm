import React from 'react';

export interface LanCartXmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartXmarkRegular: React.FC<LanCartXmarkRegularProps>;
export default LanCartXmarkRegular;
