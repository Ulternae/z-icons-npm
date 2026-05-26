import React from 'react';

export interface LanPersonToPortalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonToPortalRegular: React.FC<LanPersonToPortalRegularProps>;
export default LanPersonToPortalRegular;
