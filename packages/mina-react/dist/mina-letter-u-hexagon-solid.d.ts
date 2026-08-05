import React from 'react';

export interface MinaLetterUHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterUHexagonSolid(props: MinaLetterUHexagonSolidProps): React.ReactElement;
export default MinaLetterUHexagonSolid;
