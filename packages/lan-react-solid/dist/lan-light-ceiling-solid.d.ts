import React from 'react';

export interface LanLightCeilingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightCeilingSolid(props: LanLightCeilingSolidProps): React.ReactElement;
export default LanLightCeilingSolid;
