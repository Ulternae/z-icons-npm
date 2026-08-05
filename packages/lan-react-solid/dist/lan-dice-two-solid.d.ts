import React from 'react';

export interface LanDiceTwoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceTwoSolid(props: LanDiceTwoSolidProps): React.ReactElement;
export default LanDiceTwoSolid;
