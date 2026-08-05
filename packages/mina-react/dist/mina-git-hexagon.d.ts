import React from 'react';

export interface MinaGitHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGitHexagon(props: MinaGitHexagonProps): React.ReactElement;
export default MinaGitHexagon;
