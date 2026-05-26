import React from 'react';

export interface LanElephantRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanElephantRegular: React.FC<LanElephantRegularProps>;
export default LanElephantRegular;
