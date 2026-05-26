import React from 'react';

export interface LanFlaskVialSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlaskVialSolid: React.FC<LanFlaskVialSolidProps>;
export default LanFlaskVialSolid;
