import React from 'react';

export interface MinaLetterVProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterV(props: MinaLetterVProps): React.ReactElement;
export default MinaLetterV;
