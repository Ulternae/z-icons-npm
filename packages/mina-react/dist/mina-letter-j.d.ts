import React from 'react';

export interface MinaLetterJProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterJ(props: MinaLetterJProps): React.ReactElement;
export default MinaLetterJ;
