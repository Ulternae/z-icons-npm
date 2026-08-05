import React from 'react';

export interface MinaLetterSOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterSOctagon(props: MinaLetterSOctagonProps): React.ReactElement;
export default MinaLetterSOctagon;
