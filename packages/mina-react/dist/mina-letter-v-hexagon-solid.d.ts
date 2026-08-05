import React from 'react';

export interface MinaLetterVHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterVHexagonSolid(props: MinaLetterVHexagonSolidProps): React.ReactElement;
export default MinaLetterVHexagonSolid;
