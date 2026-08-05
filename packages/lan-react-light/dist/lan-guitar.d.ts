import React from 'react';

export interface LanGuitarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGuitar(props: LanGuitarProps): React.ReactElement;
export default LanGuitar;
