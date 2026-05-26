import React from 'react';

export interface LanPersonFromPortalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonFromPortalRegular: React.FC<LanPersonFromPortalRegularProps>;
export default LanPersonFromPortalRegular;
