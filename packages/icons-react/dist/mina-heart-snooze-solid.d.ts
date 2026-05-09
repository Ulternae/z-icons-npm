import React from 'react';

export interface MinaHeartSnoozeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartSnoozeSolid: React.FC<MinaHeartSnoozeSolidProps>;
export default MinaHeartSnoozeSolid;
