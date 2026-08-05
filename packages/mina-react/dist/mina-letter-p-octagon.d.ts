import React from 'react';

export interface MinaLetterPOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterPOctagon(props: MinaLetterPOctagonProps): React.ReactElement;
export default MinaLetterPOctagon;
