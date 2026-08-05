import React from 'react';

export interface MinaCheckHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCheckHexagonSolid(props: MinaCheckHexagonSolidProps): React.ReactElement;
export default MinaCheckHexagonSolid;
