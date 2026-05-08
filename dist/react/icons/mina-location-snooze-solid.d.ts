import React from 'react';

export interface MinaLocationSnoozeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLocationSnoozeSolid: React.FC<MinaLocationSnoozeSolidProps>;
export default MinaLocationSnoozeSolid;
