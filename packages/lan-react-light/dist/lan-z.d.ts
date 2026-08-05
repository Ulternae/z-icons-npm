import React from 'react';

export interface LanZProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanZ(props: LanZProps): React.ReactElement;
export default LanZ;
