import React from 'react';

export interface LanHexagonImageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonImageThin(props: LanHexagonImageThinProps): React.ReactElement;
export default LanHexagonImageThin;
