import React from 'react';

export interface MinaLetterSHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterSHexagon(props: MinaLetterSHexagonProps): React.ReactElement;
export default MinaLetterSHexagon;
