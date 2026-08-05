import React from 'react';

export interface LanSquarePesetaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquarePesetaSolid(props: LanSquarePesetaSolidProps): React.ReactElement;
export default LanSquarePesetaSolid;
