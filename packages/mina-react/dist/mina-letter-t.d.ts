import React from 'react';

export interface MinaLetterTProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterT(props: MinaLetterTProps): React.ReactElement;
export default MinaLetterT;
