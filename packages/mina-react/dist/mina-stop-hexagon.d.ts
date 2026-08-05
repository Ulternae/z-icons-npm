import React from 'react';

export interface MinaStopHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaStopHexagon(props: MinaStopHexagonProps): React.ReactElement;
export default MinaStopHexagon;
