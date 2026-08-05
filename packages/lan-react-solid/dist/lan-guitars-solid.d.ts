import React from 'react';

export interface LanGuitarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGuitarsSolid(props: LanGuitarsSolidProps): React.ReactElement;
export default LanGuitarsSolid;
