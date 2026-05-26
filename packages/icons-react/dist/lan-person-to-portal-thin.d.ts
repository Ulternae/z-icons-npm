import React from 'react';

export interface LanPersonToPortalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonToPortalThin: React.FC<LanPersonToPortalThinProps>;
export default LanPersonToPortalThin;
