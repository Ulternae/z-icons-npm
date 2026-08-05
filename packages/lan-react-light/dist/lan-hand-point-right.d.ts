import React from 'react';

export interface LanHandPointRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPointRight(props: LanHandPointRightProps): React.ReactElement;
export default LanHandPointRight;
