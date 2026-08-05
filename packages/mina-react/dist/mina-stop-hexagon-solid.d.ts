import React from 'react';

export interface MinaStopHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaStopHexagonSolid(props: MinaStopHexagonSolidProps): React.ReactElement;
export default MinaStopHexagonSolid;
