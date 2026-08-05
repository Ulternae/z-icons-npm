import React from 'react';

export interface LanSimCardsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSimCardsSolid(props: LanSimCardsSolidProps): React.ReactElement;
export default LanSimCardsSolid;
