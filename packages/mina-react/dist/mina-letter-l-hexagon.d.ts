import React from 'react';

export interface MinaLetterLHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterLHexagon(props: MinaLetterLHexagonProps): React.ReactElement;
export default MinaLetterLHexagon;
