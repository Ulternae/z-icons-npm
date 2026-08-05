import React from 'react';

export interface LanSquareDashedCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareDashedCirclePlus(props: LanSquareDashedCirclePlusProps): React.ReactElement;
export default LanSquareDashedCirclePlus;
