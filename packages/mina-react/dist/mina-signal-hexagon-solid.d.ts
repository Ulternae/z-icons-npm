import React from 'react';

export interface MinaSignalHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSignalHexagonSolid(props: MinaSignalHexagonSolidProps): React.ReactElement;
export default MinaSignalHexagonSolid;
