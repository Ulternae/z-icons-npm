import React from 'react';

export interface LanHouseSignalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseSignalThin(props: LanHouseSignalThinProps): React.ReactElement;
export default LanHouseSignalThin;
