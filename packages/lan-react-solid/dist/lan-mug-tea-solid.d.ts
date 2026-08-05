import React from 'react';

export interface LanMugTeaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMugTeaSolid(props: LanMugTeaSolidProps): React.ReactElement;
export default LanMugTeaSolid;
