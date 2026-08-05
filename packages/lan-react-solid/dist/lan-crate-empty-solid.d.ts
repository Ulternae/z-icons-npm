import React from 'react';

export interface LanCrateEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrateEmptySolid(props: LanCrateEmptySolidProps): React.ReactElement;
export default LanCrateEmptySolid;
