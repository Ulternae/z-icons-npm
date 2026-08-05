import React from 'react';

export interface LanDiceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceSolid(props: LanDiceSolidProps): React.ReactElement;
export default LanDiceSolid;
