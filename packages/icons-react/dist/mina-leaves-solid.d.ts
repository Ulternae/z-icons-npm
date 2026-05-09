import React from 'react';

export interface MinaLeavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLeavesSolid: React.FC<MinaLeavesSolidProps>;
export default MinaLeavesSolid;
