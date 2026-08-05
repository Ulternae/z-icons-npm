import React from 'react';

export interface MinaLetterXHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterXHexagonSolid(props: MinaLetterXHexagonSolidProps): React.ReactElement;
export default MinaLetterXHexagonSolid;
