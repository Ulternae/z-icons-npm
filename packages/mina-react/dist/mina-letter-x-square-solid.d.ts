import React from 'react';

export interface MinaLetterXSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterXSquareSolid(props: MinaLetterXSquareSolidProps): React.ReactElement;
export default MinaLetterXSquareSolid;
