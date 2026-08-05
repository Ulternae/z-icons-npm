import React from 'react';

export interface LanBabyCarriageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBabyCarriage(props: LanBabyCarriageProps): React.ReactElement;
export default LanBabyCarriage;
