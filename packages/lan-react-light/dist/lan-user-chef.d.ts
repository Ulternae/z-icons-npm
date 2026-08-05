import React from 'react';

export interface LanUserChefProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserChef(props: LanUserChefProps): React.ReactElement;
export default LanUserChef;
