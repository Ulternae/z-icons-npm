import React from 'react';

export interface LanRefrigeratorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRefrigeratorSolid(props: LanRefrigeratorSolidProps): React.ReactElement;
export default LanRefrigeratorSolid;
