import React from 'react';

export interface MinaLetterEHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterEHexagon(props: MinaLetterEHexagonProps): React.ReactElement;
export default MinaLetterEHexagon;
