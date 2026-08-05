import React from 'react';

export interface MinaLetterRSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterRSquareSolid(props: MinaLetterRSquareSolidProps): React.ReactElement;
export default MinaLetterRSquareSolid;
