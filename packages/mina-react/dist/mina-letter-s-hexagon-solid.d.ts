import React from 'react';

export interface MinaLetterSHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterSHexagonSolid(props: MinaLetterSHexagonSolidProps): React.ReactElement;
export default MinaLetterSHexagonSolid;
