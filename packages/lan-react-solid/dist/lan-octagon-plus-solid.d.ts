import React from 'react';

export interface LanOctagonPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonPlusSolid(props: LanOctagonPlusSolidProps): React.ReactElement;
export default LanOctagonPlusSolid;
