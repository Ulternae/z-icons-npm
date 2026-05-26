import React from 'react';

export interface LanFlaskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlaskSolid: React.FC<LanFlaskSolidProps>;
export default LanFlaskSolid;
