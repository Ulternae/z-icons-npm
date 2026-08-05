import React from 'react';

export interface MinaLetterZHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterZHexagon(props: MinaLetterZHexagonProps): React.ReactElement;
export default MinaLetterZHexagon;
