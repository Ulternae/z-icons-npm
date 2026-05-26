import React from 'react';

export interface LanMessageCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageCodeSolid: React.FC<LanMessageCodeSolidProps>;
export default LanMessageCodeSolid;
