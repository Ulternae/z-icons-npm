import React from 'react';

export interface MinaSignalSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSignalSquareSolid(props: MinaSignalSquareSolidProps): React.ReactElement;
export default MinaSignalSquareSolid;
