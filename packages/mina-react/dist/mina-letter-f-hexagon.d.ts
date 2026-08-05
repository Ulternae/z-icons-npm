import React from 'react';

export interface MinaLetterFHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterFHexagon(props: MinaLetterFHexagonProps): React.ReactElement;
export default MinaLetterFHexagon;
