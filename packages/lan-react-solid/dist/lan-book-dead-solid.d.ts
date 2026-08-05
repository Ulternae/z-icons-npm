import React from 'react';

export interface LanBookDeadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookDeadSolid(props: LanBookDeadSolidProps): React.ReactElement;
export default LanBookDeadSolid;
