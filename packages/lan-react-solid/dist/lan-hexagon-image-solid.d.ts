import React from 'react';

export interface LanHexagonImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonImageSolid(props: LanHexagonImageSolidProps): React.ReactElement;
export default LanHexagonImageSolid;
