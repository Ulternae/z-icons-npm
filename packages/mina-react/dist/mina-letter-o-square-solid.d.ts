import React from 'react';

export interface MinaLetterOSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterOSquareSolid(props: MinaLetterOSquareSolidProps): React.ReactElement;
export default MinaLetterOSquareSolid;
