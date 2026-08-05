import React from 'react';

export interface LanFootWingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFootWing(props: LanFootWingProps): React.ReactElement;
export default LanFootWing;
