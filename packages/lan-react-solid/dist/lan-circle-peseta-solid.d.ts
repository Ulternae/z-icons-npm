import React from 'react';

export interface LanCirclePesetaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePesetaSolid(props: LanCirclePesetaSolidProps): React.ReactElement;
export default LanCirclePesetaSolid;
