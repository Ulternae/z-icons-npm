import React from 'react';

export interface MinaLetterACircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterACircleSolid(props: MinaLetterACircleSolidProps): React.ReactElement;
export default MinaLetterACircleSolid;
