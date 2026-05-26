import React from 'react';

export interface LanKiteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKiteSolid: React.FC<LanKiteSolidProps>;
export default LanKiteSolid;
