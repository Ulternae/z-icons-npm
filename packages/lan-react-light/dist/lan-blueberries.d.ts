import React from 'react';

export interface LanBlueberriesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlueberries(props: LanBlueberriesProps): React.ReactElement;
export default LanBlueberries;
