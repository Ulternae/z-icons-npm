import React from 'react';

export interface MinaCheckHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCheckHexagon(props: MinaCheckHexagonProps): React.ReactElement;
export default MinaCheckHexagon;
