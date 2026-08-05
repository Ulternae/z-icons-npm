import React from 'react';

export interface MinaLetterYHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterYHexagon(props: MinaLetterYHexagonProps): React.ReactElement;
export default MinaLetterYHexagon;
