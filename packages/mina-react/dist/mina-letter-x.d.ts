import React from 'react';

export interface MinaLetterXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterX(props: MinaLetterXProps): React.ReactElement;
export default MinaLetterX;
