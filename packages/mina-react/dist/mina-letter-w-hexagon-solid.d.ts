import React from 'react';

export interface MinaLetterWHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterWHexagonSolid(props: MinaLetterWHexagonSolidProps): React.ReactElement;
export default MinaLetterWHexagonSolid;
