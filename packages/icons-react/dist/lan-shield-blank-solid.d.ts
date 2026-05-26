import React from 'react';

export interface LanShieldBlankSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldBlankSolid: React.FC<LanShieldBlankSolidProps>;
export default LanShieldBlankSolid;
