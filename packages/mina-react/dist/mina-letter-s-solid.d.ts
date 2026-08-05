import React from 'react';

export interface MinaLetterSSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterSSolid(props: MinaLetterSSolidProps): React.ReactElement;
export default MinaLetterSSolid;
