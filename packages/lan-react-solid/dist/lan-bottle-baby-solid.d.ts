import React from 'react';

export interface LanBottleBabySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBottleBabySolid(props: LanBottleBabySolidProps): React.ReactElement;
export default LanBottleBabySolid;
