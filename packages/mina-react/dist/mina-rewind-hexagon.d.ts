import React from 'react';

export interface MinaRewindHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRewindHexagon(props: MinaRewindHexagonProps): React.ReactElement;
export default MinaRewindHexagon;
