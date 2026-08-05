import React from 'react';

export interface MinaLetterKOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterKOctagon(props: MinaLetterKOctagonProps): React.ReactElement;
export default MinaLetterKOctagon;
