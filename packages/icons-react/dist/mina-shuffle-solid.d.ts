import React from 'react';

export interface MinaShuffleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShuffleSolid: React.FC<MinaShuffleSolidProps>;
export default MinaShuffleSolid;
