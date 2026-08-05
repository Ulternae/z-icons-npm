import React from 'react';

export interface MinaLetterBProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterB(props: MinaLetterBProps): React.ReactElement;
export default MinaLetterB;
