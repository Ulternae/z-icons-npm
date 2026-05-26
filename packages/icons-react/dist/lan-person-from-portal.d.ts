import React from 'react';

export interface LanPersonFromPortalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonFromPortal: React.FC<LanPersonFromPortalProps>;
export default LanPersonFromPortal;
