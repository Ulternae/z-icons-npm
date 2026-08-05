import React from 'react';

export interface MinaUserHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserHexagon(props: MinaUserHexagonProps): React.ReactElement;
export default MinaUserHexagon;
