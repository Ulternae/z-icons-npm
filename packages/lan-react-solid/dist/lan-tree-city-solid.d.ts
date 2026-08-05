import React from 'react';

export interface LanTreeCitySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreeCitySolid(props: LanTreeCitySolidProps): React.ReactElement;
export default LanTreeCitySolid;
