import React from 'react';

export interface MinaSignalHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSignalHexagon(props: MinaSignalHexagonProps): React.ReactElement;
export default MinaSignalHexagon;
