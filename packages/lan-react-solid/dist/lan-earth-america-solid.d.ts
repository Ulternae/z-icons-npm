import React from 'react';

export interface LanEarthAmericaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarthAmericaSolid(props: LanEarthAmericaSolidProps): React.ReactElement;
export default LanEarthAmericaSolid;
