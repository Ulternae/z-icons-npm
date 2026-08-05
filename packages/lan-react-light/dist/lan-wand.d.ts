import React from 'react';

export interface LanWandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWand(props: LanWandProps): React.ReactElement;
export default LanWand;
