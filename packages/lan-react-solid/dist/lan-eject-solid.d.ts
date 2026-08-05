import React from 'react';

export interface LanEjectSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEjectSolid(props: LanEjectSolidProps): React.ReactElement;
export default LanEjectSolid;
