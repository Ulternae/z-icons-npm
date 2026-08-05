import React from 'react';

export interface LanDiceFourSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceFourSolid(props: LanDiceFourSolidProps): React.ReactElement;
export default LanDiceFourSolid;
