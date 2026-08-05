import React from 'react';

export interface LanArchwaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArchwaySolid(props: LanArchwaySolidProps): React.ReactElement;
export default LanArchwaySolid;
