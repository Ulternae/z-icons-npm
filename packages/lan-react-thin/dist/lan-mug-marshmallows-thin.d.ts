import React from 'react';

export interface LanMugMarshmallowsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMugMarshmallowsThin(props: LanMugMarshmallowsThinProps): React.ReactElement;
export default LanMugMarshmallowsThin;
