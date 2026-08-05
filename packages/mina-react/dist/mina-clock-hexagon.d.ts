import React from 'react';

export interface MinaClockHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockHexagon(props: MinaClockHexagonProps): React.ReactElement;
export default MinaClockHexagon;
