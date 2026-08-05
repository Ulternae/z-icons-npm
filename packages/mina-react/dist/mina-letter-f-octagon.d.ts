import React from 'react';

export interface MinaLetterFOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterFOctagon(props: MinaLetterFOctagonProps): React.ReactElement;
export default MinaLetterFOctagon;
