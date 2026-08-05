import React from 'react';

export interface LanAmpersandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAmpersandSolid(props: LanAmpersandSolidProps): React.ReactElement;
export default LanAmpersandSolid;
