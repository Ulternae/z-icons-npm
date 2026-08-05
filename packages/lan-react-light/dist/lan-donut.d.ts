import React from 'react';

export interface LanDonutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDonut(props: LanDonutProps): React.ReactElement;
export default LanDonut;
