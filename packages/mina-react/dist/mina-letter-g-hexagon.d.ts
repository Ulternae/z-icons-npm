import React from 'react';

export interface MinaLetterGHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterGHexagon(props: MinaLetterGHexagonProps): React.ReactElement;
export default MinaLetterGHexagon;
