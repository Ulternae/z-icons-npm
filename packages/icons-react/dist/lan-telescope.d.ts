import React from 'react';

export interface LanTelescopeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTelescope: React.FC<LanTelescopeProps>;
export default LanTelescope;
