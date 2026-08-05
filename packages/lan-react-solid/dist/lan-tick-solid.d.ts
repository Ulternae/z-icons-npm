import React from 'react';

export interface LanTickSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTickSolid(props: LanTickSolidProps): React.ReactElement;
export default LanTickSolid;
