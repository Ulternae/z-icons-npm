import React from 'react';

export interface LanFlaskGearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlaskGear: React.FC<LanFlaskGearProps>;
export default LanFlaskGear;
