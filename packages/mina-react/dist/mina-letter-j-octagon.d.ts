import React from 'react';

export interface MinaLetterJOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterJOctagon(props: MinaLetterJOctagonProps): React.ReactElement;
export default MinaLetterJOctagon;
