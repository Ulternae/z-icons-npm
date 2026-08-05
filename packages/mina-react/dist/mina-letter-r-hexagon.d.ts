import React from 'react';

export interface MinaLetterRHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterRHexagon(props: MinaLetterRHexagonProps): React.ReactElement;
export default MinaLetterRHexagon;
