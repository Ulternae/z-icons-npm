import React from 'react';

export interface LanUpLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUpLeft(props: LanUpLeftProps): React.ReactElement;
export default LanUpLeft;
