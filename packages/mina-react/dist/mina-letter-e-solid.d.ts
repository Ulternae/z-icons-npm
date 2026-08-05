import React from 'react';

export interface MinaLetterESolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterESolid(props: MinaLetterESolidProps): React.ReactElement;
export default MinaLetterESolid;
