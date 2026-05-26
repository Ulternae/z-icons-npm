import React from 'react';

export interface LanTruckRampCouchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckRampCouch: React.FC<LanTruckRampCouchProps>;
export default LanTruckRampCouch;
