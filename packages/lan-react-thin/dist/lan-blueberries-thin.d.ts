import React from 'react';

export interface LanBlueberriesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlueberriesThin(props: LanBlueberriesThinProps): React.ReactElement;
export default LanBlueberriesThin;
