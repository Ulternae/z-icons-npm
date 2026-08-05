import React from 'react';

export interface MinaLetterUSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterUSquareSolid(props: MinaLetterUSquareSolidProps): React.ReactElement;
export default MinaLetterUSquareSolid;
