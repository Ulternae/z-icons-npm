import React from 'react';

export interface LanGarageCarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGarageCarSolid(props: LanGarageCarSolidProps): React.ReactElement;
export default LanGarageCarSolid;
