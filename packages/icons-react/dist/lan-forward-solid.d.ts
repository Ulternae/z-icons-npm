import React from 'react';

export interface LanForwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanForwardSolid: React.FC<LanForwardSolidProps>;
export default LanForwardSolid;
