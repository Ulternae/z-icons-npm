import React from 'react';

export interface MinaLetterKHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterKHexagon(props: MinaLetterKHexagonProps): React.ReactElement;
export default MinaLetterKHexagon;
