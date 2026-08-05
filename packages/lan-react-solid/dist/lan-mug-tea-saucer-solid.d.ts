import React from 'react';

export interface LanMugTeaSaucerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMugTeaSaucerSolid(props: LanMugTeaSaucerSolidProps): React.ReactElement;
export default LanMugTeaSaucerSolid;
