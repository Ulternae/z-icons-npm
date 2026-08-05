import React from 'react';

export interface MinaLetterDHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterDHexagon(props: MinaLetterDHexagonProps): React.ReactElement;
export default MinaLetterDHexagon;
