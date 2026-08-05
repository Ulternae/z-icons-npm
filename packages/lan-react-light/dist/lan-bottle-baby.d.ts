import React from 'react';

export interface LanBottleBabyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBottleBaby(props: LanBottleBabyProps): React.ReactElement;
export default LanBottleBaby;
