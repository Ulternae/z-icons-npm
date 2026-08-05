import React from 'react';

export interface MinaLetterNCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterNCircleSolid(props: MinaLetterNCircleSolidProps): React.ReactElement;
export default MinaLetterNCircleSolid;
