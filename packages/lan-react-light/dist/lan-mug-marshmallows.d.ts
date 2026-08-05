import React from 'react';

export interface LanMugMarshmallowsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMugMarshmallows(props: LanMugMarshmallowsProps): React.ReactElement;
export default LanMugMarshmallows;
