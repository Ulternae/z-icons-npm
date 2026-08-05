import React from 'react';

export interface MinaLetterGSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterGSquareSolid(props: MinaLetterGSquareSolidProps): React.ReactElement;
export default MinaLetterGSquareSolid;
