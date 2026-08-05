import React from 'react';

export interface LanHammerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHammer(props: LanHammerProps): React.ReactElement;
export default LanHammer;
