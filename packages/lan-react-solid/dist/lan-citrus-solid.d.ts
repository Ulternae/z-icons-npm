import React from 'react';

export interface LanCitrusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCitrusSolid(props: LanCitrusSolidProps): React.ReactElement;
export default LanCitrusSolid;
