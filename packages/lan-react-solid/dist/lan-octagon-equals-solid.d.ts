import React from 'react';

export interface LanOctagonEqualsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonEqualsSolid(props: LanOctagonEqualsSolidProps): React.ReactElement;
export default LanOctagonEqualsSolid;
