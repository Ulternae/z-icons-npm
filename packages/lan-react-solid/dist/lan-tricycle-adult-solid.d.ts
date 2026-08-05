import React from 'react';

export interface LanTricycleAdultSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTricycleAdultSolid(props: LanTricycleAdultSolidProps): React.ReactElement;
export default LanTricycleAdultSolid;
