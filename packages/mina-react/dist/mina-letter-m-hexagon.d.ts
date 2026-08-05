import React from 'react';

export interface MinaLetterMHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterMHexagon(props: MinaLetterMHexagonProps): React.ReactElement;
export default MinaLetterMHexagon;
