import React from 'react';

export interface LanMercuryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMercury(props: LanMercuryProps): React.ReactElement;
export default LanMercury;
