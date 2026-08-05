import React from 'react';

export interface MinaLetterISquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterISquareSolid(props: MinaLetterISquareSolidProps): React.ReactElement;
export default MinaLetterISquareSolid;
