import React from 'react';

export interface LanRubleSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRubleSignSolid(props: LanRubleSignSolidProps): React.ReactElement;
export default LanRubleSignSolid;
