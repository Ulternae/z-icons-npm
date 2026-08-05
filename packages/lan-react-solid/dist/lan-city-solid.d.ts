import React from 'react';

export interface LanCitySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCitySolid(props: LanCitySolidProps): React.ReactElement;
export default LanCitySolid;
