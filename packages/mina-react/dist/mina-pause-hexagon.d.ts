import React from 'react';

export interface MinaPauseHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPauseHexagon(props: MinaPauseHexagonProps): React.ReactElement;
export default MinaPauseHexagon;
