import React from 'react';

export interface LanHexagonXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonXmark(props: LanHexagonXmarkProps): React.ReactElement;
export default LanHexagonXmark;
