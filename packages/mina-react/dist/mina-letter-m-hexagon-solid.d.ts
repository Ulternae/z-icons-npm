import React from 'react';

export interface MinaLetterMHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterMHexagonSolid(props: MinaLetterMHexagonSolidProps): React.ReactElement;
export default MinaLetterMHexagonSolid;
