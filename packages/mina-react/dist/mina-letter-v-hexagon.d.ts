import React from 'react';

export interface MinaLetterVHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterVHexagon(props: MinaLetterVHexagonProps): React.ReactElement;
export default MinaLetterVHexagon;
