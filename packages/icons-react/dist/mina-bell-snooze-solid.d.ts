import React from 'react';

export interface MinaBellSnoozeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBellSnoozeSolid: React.FC<MinaBellSnoozeSolidProps>;
export default MinaBellSnoozeSolid;
