import React from 'react';

export interface LanPickaxeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPickaxe(props: LanPickaxeProps): React.ReactElement;
export default LanPickaxe;
