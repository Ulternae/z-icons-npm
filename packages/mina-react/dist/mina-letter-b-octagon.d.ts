import React from 'react';

export interface MinaLetterBOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterBOctagon(props: MinaLetterBOctagonProps): React.ReactElement;
export default MinaLetterBOctagon;
