import React from 'react';

export interface LanWhaleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWhale: React.FC<LanWhaleProps>;
export default LanWhale;
