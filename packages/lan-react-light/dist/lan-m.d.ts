import React from 'react';

export interface LanMProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanM(props: LanMProps): React.ReactElement;
export default LanM;
