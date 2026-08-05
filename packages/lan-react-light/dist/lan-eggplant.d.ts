import React from 'react';

export interface LanEggplantProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEggplant(props: LanEggplantProps): React.ReactElement;
export default LanEggplant;
