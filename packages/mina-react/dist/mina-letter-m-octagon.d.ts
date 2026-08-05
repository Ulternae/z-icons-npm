import React from 'react';

export interface MinaLetterMOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterMOctagon(props: MinaLetterMOctagonProps): React.ReactElement;
export default MinaLetterMOctagon;
