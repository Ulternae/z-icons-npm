import React from 'react';

export interface LanJeansSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJeansSolid(props: LanJeansSolidProps): React.ReactElement;
export default LanJeansSolid;
