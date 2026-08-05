import React from 'react';

export interface LanCarWashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarWash(props: LanCarWashProps): React.ReactElement;
export default LanCarWash;
