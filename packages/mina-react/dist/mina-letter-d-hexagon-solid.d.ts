import React from 'react';

export interface MinaLetterDHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterDHexagonSolid(props: MinaLetterDHexagonSolidProps): React.ReactElement;
export default MinaLetterDHexagonSolid;
