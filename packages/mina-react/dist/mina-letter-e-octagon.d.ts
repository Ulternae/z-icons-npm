import React from 'react';

export interface MinaLetterEOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterEOctagon(props: MinaLetterEOctagonProps): React.ReactElement;
export default MinaLetterEOctagon;
