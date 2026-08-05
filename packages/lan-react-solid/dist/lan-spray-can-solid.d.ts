import React from 'react';

export interface LanSprayCanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSprayCanSolid(props: LanSprayCanSolidProps): React.ReactElement;
export default LanSprayCanSolid;
