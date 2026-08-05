import React from 'react';

export interface MinaLetterNOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterNOctagon(props: MinaLetterNOctagonProps): React.ReactElement;
export default MinaLetterNOctagon;
