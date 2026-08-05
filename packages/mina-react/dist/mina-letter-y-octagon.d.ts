import React from 'react';

export interface MinaLetterYOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterYOctagon(props: MinaLetterYOctagonProps): React.ReactElement;
export default MinaLetterYOctagon;
