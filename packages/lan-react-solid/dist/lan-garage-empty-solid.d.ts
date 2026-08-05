import React from 'react';

export interface LanGarageEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGarageEmptySolid(props: LanGarageEmptySolidProps): React.ReactElement;
export default LanGarageEmptySolid;
