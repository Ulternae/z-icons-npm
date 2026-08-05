import React from 'react';

export interface MinaLetterCHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterCHexagon(props: MinaLetterCHexagonProps): React.ReactElement;
export default MinaLetterCHexagon;
