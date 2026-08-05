import React from 'react';

export interface LanPantiesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPantiesThin(props: LanPantiesThinProps): React.ReactElement;
export default LanPantiesThin;
