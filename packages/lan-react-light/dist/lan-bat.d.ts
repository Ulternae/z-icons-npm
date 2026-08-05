import React from 'react';

export interface LanBatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBat(props: LanBatProps): React.ReactElement;
export default LanBat;
