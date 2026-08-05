import React from 'react';

export interface MinaLetterXOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterXOctagon(props: MinaLetterXOctagonProps): React.ReactElement;
export default MinaLetterXOctagon;
