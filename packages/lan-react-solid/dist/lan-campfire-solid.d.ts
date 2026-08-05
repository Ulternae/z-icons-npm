import React from 'react';

export interface LanCampfireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCampfireSolid(props: LanCampfireSolidProps): React.ReactElement;
export default LanCampfireSolid;
