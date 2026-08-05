import React from 'react';

export interface LanOctagonDivideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonDivideSolid(props: LanOctagonDivideSolidProps): React.ReactElement;
export default LanOctagonDivideSolid;
