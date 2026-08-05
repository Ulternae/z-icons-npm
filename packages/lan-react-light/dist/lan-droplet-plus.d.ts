import React from 'react';

export interface LanDropletPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDropletPlus(props: LanDropletPlusProps): React.ReactElement;
export default LanDropletPlus;
