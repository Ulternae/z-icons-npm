import React from 'react';

export interface MinaLetterQHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterQHexagon(props: MinaLetterQHexagonProps): React.ReactElement;
export default MinaLetterQHexagon;
