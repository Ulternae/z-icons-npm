import React from 'react';

export interface MinaLetterNProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterN(props: MinaLetterNProps): React.ReactElement;
export default MinaLetterN;
