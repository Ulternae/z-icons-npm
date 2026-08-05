import React from 'react';

export interface LanEqualsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEqualsSolid(props: LanEqualsSolidProps): React.ReactElement;
export default LanEqualsSolid;
