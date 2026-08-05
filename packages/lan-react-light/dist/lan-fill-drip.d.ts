import React from 'react';

export interface LanFillDripProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFillDrip(props: LanFillDripProps): React.ReactElement;
export default LanFillDrip;
