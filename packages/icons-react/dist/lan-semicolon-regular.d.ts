import React from 'react';

export interface LanSemicolonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSemicolonRegular: React.FC<LanSemicolonRegularProps>;
export default LanSemicolonRegular;
