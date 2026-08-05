import React from 'react';

export interface MinaLetterBCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterBCircleSolid(props: MinaLetterBCircleSolidProps): React.ReactElement;
export default MinaLetterBCircleSolid;
