import React from 'react';

export interface MinaLetterWHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterWHexagon(props: MinaLetterWHexagonProps): React.ReactElement;
export default MinaLetterWHexagon;
