import React from 'react';

export interface MinaLetterXHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterXHexagon(props: MinaLetterXHexagonProps): React.ReactElement;
export default MinaLetterXHexagon;
