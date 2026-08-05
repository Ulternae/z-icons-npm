import React from 'react';

export interface MinaLetterTHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterTHexagon(props: MinaLetterTHexagonProps): React.ReactElement;
export default MinaLetterTHexagon;
