import React from 'react';

export interface MinaLetterQProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterQ(props: MinaLetterQProps): React.ReactElement;
export default MinaLetterQ;
