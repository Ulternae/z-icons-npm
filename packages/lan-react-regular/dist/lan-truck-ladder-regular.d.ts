import React from 'react';

export interface LanTruckLadderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckLadderRegular(props: LanTruckLadderRegularProps): React.ReactElement;
export default LanTruckLadderRegular;
