import React from 'react';

export interface LanEarthOceaniaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarthOceaniaSolid(props: LanEarthOceaniaSolidProps): React.ReactElement;
export default LanEarthOceaniaSolid;
