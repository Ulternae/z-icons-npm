import React from 'react';

export interface LanAnglesUpDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAnglesUpDownSolid(props: LanAnglesUpDownSolidProps): React.ReactElement;
export default LanAnglesUpDownSolid;
