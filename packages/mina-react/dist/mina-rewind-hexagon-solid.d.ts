import React from 'react';

export interface MinaRewindHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRewindHexagonSolid(props: MinaRewindHexagonSolidProps): React.ReactElement;
export default MinaRewindHexagonSolid;
