import React from 'react';

export interface LanHexagonXmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonXmarkThin(props: LanHexagonXmarkThinProps): React.ReactElement;
export default LanHexagonXmarkThin;
