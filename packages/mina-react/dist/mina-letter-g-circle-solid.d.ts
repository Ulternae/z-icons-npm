import React from 'react';

export interface MinaLetterGCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterGCircleSolid(props: MinaLetterGCircleSolidProps): React.ReactElement;
export default MinaLetterGCircleSolid;
