import React from 'react';

export interface MinaLetterIOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterIOctagon(props: MinaLetterIOctagonProps): React.ReactElement;
export default MinaLetterIOctagon;
