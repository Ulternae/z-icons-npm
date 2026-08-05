import React from 'react';

export interface LanAwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAward(props: LanAwardProps): React.ReactElement;
export default LanAward;
