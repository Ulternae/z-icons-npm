import React from 'react';

export interface LanBuoyMooringProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuoyMooring(props: LanBuoyMooringProps): React.ReactElement;
export default LanBuoyMooring;
