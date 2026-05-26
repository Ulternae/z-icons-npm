import React from 'react';

export interface LanBootHeeledSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBootHeeledSolid: React.FC<LanBootHeeledSolidProps>;
export default LanBootHeeledSolid;
