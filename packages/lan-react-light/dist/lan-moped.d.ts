import React from 'react';

export interface LanMopedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoped(props: LanMopedProps): React.ReactElement;
export default LanMoped;
