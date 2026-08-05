import React from 'react';

export interface MinaDangerHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDangerHexagon(props: MinaDangerHexagonProps): React.ReactElement;
export default MinaDangerHexagon;
