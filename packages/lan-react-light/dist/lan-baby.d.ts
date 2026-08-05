import React from 'react';

export interface LanBabyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBaby(props: LanBabyProps): React.ReactElement;
export default LanBaby;
