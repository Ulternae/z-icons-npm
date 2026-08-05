import React from 'react';

export interface MinaLetterAHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterAHexagon(props: MinaLetterAHexagonProps): React.ReactElement;
export default MinaLetterAHexagon;
