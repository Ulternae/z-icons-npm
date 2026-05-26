import React from 'react';

export interface LanTruckRampCouchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckRampCouchThin: React.FC<LanTruckRampCouchThinProps>;
export default LanTruckRampCouchThin;
