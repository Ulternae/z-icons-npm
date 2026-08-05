import React from 'react';

export interface MinaLetterUHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterUHexagon(props: MinaLetterUHexagonProps): React.ReactElement;
export default MinaLetterUHexagon;
