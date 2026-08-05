import React from 'react';

export interface LanOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonSolid(props: LanOctagonSolidProps): React.ReactElement;
export default LanOctagonSolid;
