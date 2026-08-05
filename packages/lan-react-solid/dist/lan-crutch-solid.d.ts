import React from 'react';

export interface LanCrutchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrutchSolid(props: LanCrutchSolidProps): React.ReactElement;
export default LanCrutchSolid;
