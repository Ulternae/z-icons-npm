import React from 'react';

export interface MinaLetterOHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterOHexagon(props: MinaLetterOHexagonProps): React.ReactElement;
export default MinaLetterOHexagon;
