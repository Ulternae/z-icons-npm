import React from 'react';

export interface MinaLetterCCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterCCircleSolid(props: MinaLetterCCircleSolidProps): React.ReactElement;
export default MinaLetterCCircleSolid;
