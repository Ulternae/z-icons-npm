import React from 'react';

export interface LanCampgroundSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCampgroundSolid(props: LanCampgroundSolidProps): React.ReactElement;
export default LanCampgroundSolid;
