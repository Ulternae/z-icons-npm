import React from 'react';

export interface MinaShuffleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShuffleSolid(props: MinaShuffleSolidProps): React.ReactElement;
export default MinaShuffleSolid;
