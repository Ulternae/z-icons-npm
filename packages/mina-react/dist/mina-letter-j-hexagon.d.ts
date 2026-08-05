import React from 'react';

export interface MinaLetterJHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterJHexagon(props: MinaLetterJHexagonProps): React.ReactElement;
export default MinaLetterJHexagon;
