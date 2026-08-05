import React from 'react';

export interface LanTProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanT(props: LanTProps): React.ReactElement;
export default LanT;
