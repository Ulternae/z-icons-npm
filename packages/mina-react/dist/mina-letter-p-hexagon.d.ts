import React from 'react';

export interface MinaLetterPHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterPHexagon(props: MinaLetterPHexagonProps): React.ReactElement;
export default MinaLetterPHexagon;
