import React from 'react';

export interface LanLineHeightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLineHeightSolid(props: LanLineHeightSolidProps): React.ReactElement;
export default LanLineHeightSolid;
