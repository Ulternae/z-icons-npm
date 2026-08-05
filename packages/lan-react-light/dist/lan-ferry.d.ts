import React from 'react';

export interface LanFerryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFerry(props: LanFerryProps): React.ReactElement;
export default LanFerry;
