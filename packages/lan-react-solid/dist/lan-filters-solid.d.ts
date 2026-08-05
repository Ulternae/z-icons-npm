import React from 'react';

export interface LanFiltersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFiltersSolid(props: LanFiltersSolidProps): React.ReactElement;
export default LanFiltersSolid;
