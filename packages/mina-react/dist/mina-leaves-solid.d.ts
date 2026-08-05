import React from 'react';

export interface MinaLeavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLeavesSolid(props: MinaLeavesSolidProps): React.ReactElement;
export default MinaLeavesSolid;
