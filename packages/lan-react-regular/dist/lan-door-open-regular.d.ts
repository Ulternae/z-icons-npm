import React from 'react';

export interface LanDoorOpenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDoorOpenRegular(props: LanDoorOpenRegularProps): React.ReactElement;
export default LanDoorOpenRegular;
