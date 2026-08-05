import React from 'react';

export interface LanMinusOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMinusOctagonSolid(props: LanMinusOctagonSolidProps): React.ReactElement;
export default LanMinusOctagonSolid;
