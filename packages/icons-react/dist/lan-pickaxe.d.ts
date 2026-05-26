import React from 'react';

export interface LanPickaxeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPickaxe: React.FC<LanPickaxeProps>;
export default LanPickaxe;
