import React from 'react';

export interface MinaLetterHHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterHHexagon(props: MinaLetterHHexagonProps): React.ReactElement;
export default MinaLetterHHexagon;
