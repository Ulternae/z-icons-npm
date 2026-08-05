import React from 'react';

export interface MinaPuzzleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPuzzleSolid(props: MinaPuzzleSolidProps): React.ReactElement;
export default MinaPuzzleSolid;
