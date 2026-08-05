import React from 'react';

export interface LanCardsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardsSolid(props: LanCardsSolidProps): React.ReactElement;
export default LanCardsSolid;
