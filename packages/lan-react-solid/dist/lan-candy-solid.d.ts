import React from 'react';

export interface LanCandySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCandySolid(props: LanCandySolidProps): React.ReactElement;
export default LanCandySolid;
