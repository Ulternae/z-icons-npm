import React from 'react';

export interface LanFamilyPantsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFamilyPantsThin(props: LanFamilyPantsThinProps): React.ReactElement;
export default LanFamilyPantsThin;
