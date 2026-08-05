import React from 'react';

export interface LanGuitarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGuitarSolid(props: LanGuitarSolidProps): React.ReactElement;
export default LanGuitarSolid;
