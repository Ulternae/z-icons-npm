import React from 'react';

export interface MinaLetterQOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterQOctagon(props: MinaLetterQOctagonProps): React.ReactElement;
export default MinaLetterQOctagon;
