import React from 'react';

export interface LanTrowelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrowel(props: LanTrowelProps): React.ReactElement;
export default LanTrowel;
