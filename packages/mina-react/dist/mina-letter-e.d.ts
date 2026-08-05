import React from 'react';

export interface MinaLetterEProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterE(props: MinaLetterEProps): React.ReactElement;
export default MinaLetterE;
