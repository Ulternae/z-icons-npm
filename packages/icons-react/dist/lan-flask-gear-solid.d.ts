import React from 'react';

export interface LanFlaskGearSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlaskGearSolid: React.FC<LanFlaskGearSolidProps>;
export default LanFlaskGearSolid;
