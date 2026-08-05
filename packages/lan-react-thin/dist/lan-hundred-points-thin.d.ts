import React from 'react';

export interface LanHundredPointsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHundredPointsThin(props: LanHundredPointsThinProps): React.ReactElement;
export default LanHundredPointsThin;
