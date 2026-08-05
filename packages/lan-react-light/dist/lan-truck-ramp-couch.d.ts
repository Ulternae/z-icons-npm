import React from 'react';

export interface LanTruckRampCouchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckRampCouch(props: LanTruckRampCouchProps): React.ReactElement;
export default LanTruckRampCouch;
