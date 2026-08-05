import React from 'react';

export interface LanHexagonNodesBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonNodesBoltThin(props: LanHexagonNodesBoltThinProps): React.ReactElement;
export default LanHexagonNodesBoltThin;
