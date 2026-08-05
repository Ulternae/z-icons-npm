import React from 'react';

export interface LanCircleBahtSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleBahtSolid(props: LanCircleBahtSolidProps): React.ReactElement;
export default LanCircleBahtSolid;
