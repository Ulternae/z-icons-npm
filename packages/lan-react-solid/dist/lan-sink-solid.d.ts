import React from 'react';

export interface LanSinkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSinkSolid(props: LanSinkSolidProps): React.ReactElement;
export default LanSinkSolid;
