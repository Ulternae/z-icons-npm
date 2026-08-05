import React from 'react';

export interface MinaLetterCOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterCOctagon(props: MinaLetterCOctagonProps): React.ReactElement;
export default MinaLetterCOctagon;
