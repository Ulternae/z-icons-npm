import React from 'react';

export interface LanCardSpadeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardSpadeSolid(props: LanCardSpadeSolidProps): React.ReactElement;
export default LanCardSpadeSolid;
