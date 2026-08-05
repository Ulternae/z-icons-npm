import React from 'react';

export interface LanHexagonNodesBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonNodesBolt(props: LanHexagonNodesBoltProps): React.ReactElement;
export default LanHexagonNodesBolt;
