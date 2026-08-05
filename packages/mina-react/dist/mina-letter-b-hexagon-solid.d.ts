import React from 'react';

export interface MinaLetterBHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterBHexagonSolid(props: MinaLetterBHexagonSolidProps): React.ReactElement;
export default MinaLetterBHexagonSolid;
