import React from 'react';

export interface LanHexagonDivideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonDivideThin(props: LanHexagonDivideThinProps): React.ReactElement;
export default LanHexagonDivideThin;
