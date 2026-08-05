import React from 'react';

export interface MinaLetterWOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterWOctagon(props: MinaLetterWOctagonProps): React.ReactElement;
export default MinaLetterWOctagon;
