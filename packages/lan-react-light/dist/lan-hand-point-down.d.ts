import React from 'react';

export interface LanHandPointDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPointDown(props: LanHandPointDownProps): React.ReactElement;
export default LanHandPointDown;
