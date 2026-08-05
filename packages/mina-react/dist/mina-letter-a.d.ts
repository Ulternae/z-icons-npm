import React from 'react';

export interface MinaLetterAProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterA(props: MinaLetterAProps): React.ReactElement;
export default MinaLetterA;
