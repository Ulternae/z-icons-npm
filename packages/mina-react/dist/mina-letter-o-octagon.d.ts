import React from 'react';

export interface MinaLetterOOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterOOctagon(props: MinaLetterOOctagonProps): React.ReactElement;
export default MinaLetterOOctagon;
