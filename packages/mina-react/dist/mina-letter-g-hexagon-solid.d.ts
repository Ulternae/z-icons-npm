import React from 'react';

export interface MinaLetterGHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterGHexagonSolid(props: MinaLetterGHexagonSolidProps): React.ReactElement;
export default MinaLetterGHexagonSolid;
