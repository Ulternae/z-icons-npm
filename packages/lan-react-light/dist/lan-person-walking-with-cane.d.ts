import React from 'react';

export interface LanPersonWalkingWithCaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonWalkingWithCane(props: LanPersonWalkingWithCaneProps): React.ReactElement;
export default LanPersonWalkingWithCane;
