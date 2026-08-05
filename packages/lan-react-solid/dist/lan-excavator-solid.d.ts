import React from 'react';

export interface LanExcavatorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanExcavatorSolid(props: LanExcavatorSolidProps): React.ReactElement;
export default LanExcavatorSolid;
