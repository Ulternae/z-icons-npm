import React from 'react';

export interface MinaLetterZProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterZ(props: MinaLetterZProps): React.ReactElement;
export default MinaLetterZ;
