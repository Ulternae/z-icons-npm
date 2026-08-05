import React from 'react';

export interface LanSquareHryvniaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareHryvniaSolid(props: LanSquareHryvniaSolidProps): React.ReactElement;
export default LanSquareHryvniaSolid;
