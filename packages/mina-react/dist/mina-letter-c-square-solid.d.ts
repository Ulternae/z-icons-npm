import React from 'react';

export interface MinaLetterCSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterCSquareSolid(props: MinaLetterCSquareSolidProps): React.ReactElement;
export default MinaLetterCSquareSolid;
