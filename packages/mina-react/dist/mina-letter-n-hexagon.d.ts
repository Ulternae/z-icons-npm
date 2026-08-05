import React from 'react';

export interface MinaLetterNHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterNHexagon(props: MinaLetterNHexagonProps): React.ReactElement;
export default MinaLetterNHexagon;
