import React from 'react';

export interface LanSquareNairaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareNairaSolid(props: LanSquareNairaSolidProps): React.ReactElement;
export default LanSquareNairaSolid;
