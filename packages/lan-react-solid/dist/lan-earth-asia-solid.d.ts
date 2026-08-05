import React from 'react';

export interface LanEarthAsiaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarthAsiaSolid(props: LanEarthAsiaSolidProps): React.ReactElement;
export default LanEarthAsiaSolid;
