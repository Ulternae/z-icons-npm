import React from 'react';

export interface MinaLetterUProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterU(props: MinaLetterUProps): React.ReactElement;
export default MinaLetterU;
