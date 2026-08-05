import React from 'react';

export interface LanBowlSaladProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlSalad(props: LanBowlSaladProps): React.ReactElement;
export default LanBowlSalad;
