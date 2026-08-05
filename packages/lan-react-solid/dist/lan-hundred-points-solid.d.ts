import React from 'react';

export interface LanHundredPointsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHundredPointsSolid(props: LanHundredPointsSolidProps): React.ReactElement;
export default LanHundredPointsSolid;
