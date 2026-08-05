import React from 'react';

export interface LanPersonPrayingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonPrayingSolid(props: LanPersonPrayingSolidProps): React.ReactElement;
export default LanPersonPrayingSolid;
