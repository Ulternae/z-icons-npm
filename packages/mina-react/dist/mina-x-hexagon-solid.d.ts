import React from 'react';

export interface MinaXHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaXHexagonSolid(props: MinaXHexagonSolidProps): React.ReactElement;
export default MinaXHexagonSolid;
