import React from 'react';

export interface LanPersonToPortalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonToPortal: React.FC<LanPersonToPortalProps>;
export default LanPersonToPortal;
