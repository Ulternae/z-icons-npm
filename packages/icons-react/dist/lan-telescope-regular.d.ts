import React from 'react';

export interface LanTelescopeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTelescopeRegular: React.FC<LanTelescopeRegularProps>;
export default LanTelescopeRegular;
