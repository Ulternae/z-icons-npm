import React from 'react';

export interface MinaLetterHOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterHOctagon(props: MinaLetterHOctagonProps): React.ReactElement;
export default MinaLetterHOctagon;
