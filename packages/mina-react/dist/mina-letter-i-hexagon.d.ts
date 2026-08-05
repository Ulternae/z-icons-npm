import React from 'react';

export interface MinaLetterIHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterIHexagon(props: MinaLetterIHexagonProps): React.ReactElement;
export default MinaLetterIHexagon;
