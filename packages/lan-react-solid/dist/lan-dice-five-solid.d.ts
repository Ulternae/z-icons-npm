import React from 'react';

export interface LanDiceFiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceFiveSolid(props: LanDiceFiveSolidProps): React.ReactElement;
export default LanDiceFiveSolid;
