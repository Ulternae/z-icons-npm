import React from 'react';

export interface MinaLockHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLockHexagon(props: MinaLockHexagonProps): React.ReactElement;
export default MinaLockHexagon;
