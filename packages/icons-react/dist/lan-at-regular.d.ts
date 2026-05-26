import React from 'react';

export interface LanAtRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAtRegular: React.FC<LanAtRegularProps>;
export default LanAtRegular;
