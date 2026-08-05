import React from 'react';

export interface MinaClockHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockHexagonSolid(props: MinaClockHexagonSolidProps): React.ReactElement;
export default MinaClockHexagonSolid;
