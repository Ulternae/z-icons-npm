import React from 'react';

export interface LanSuitcaseRollingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSuitcaseRollingSolid(props: LanSuitcaseRollingSolidProps): React.ReactElement;
export default LanSuitcaseRollingSolid;
