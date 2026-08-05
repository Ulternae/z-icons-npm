import React from 'react';

export interface MinaGitHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGitHexagonSolid(props: MinaGitHexagonSolidProps): React.ReactElement;
export default MinaGitHexagonSolid;
