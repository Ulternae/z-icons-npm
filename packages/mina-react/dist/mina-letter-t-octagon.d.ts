import React from 'react';

export interface MinaLetterTOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterTOctagon(props: MinaLetterTOctagonProps): React.ReactElement;
export default MinaLetterTOctagon;
