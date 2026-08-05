import React from 'react';

export interface LanRepublicanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRepublicanSolid(props: LanRepublicanSolidProps): React.ReactElement;
export default LanRepublicanSolid;
