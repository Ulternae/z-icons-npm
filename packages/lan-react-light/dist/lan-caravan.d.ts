import React from 'react';

export interface LanCaravanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaravan(props: LanCaravanProps): React.ReactElement;
export default LanCaravan;
