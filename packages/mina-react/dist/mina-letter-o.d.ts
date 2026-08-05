import React from 'react';

export interface MinaLetterOProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterO(props: MinaLetterOProps): React.ReactElement;
export default MinaLetterO;
