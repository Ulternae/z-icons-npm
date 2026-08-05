import React from 'react';

export interface LanPersonSkiingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSkiing(props: LanPersonSkiingProps): React.ReactElement;
export default LanPersonSkiing;
