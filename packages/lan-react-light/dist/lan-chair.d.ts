import React from 'react';

export interface LanChairProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChair(props: LanChairProps): React.ReactElement;
export default LanChair;
