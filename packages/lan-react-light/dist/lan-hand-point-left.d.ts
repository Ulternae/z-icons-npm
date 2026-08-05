import React from 'react';

export interface LanHandPointLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPointLeft(props: LanHandPointLeftProps): React.ReactElement;
export default LanHandPointLeft;
