import React from 'react';

export interface MinaLetterHProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterH(props: MinaLetterHProps): React.ReactElement;
export default MinaLetterH;
