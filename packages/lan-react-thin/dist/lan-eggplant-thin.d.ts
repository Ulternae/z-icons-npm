import React from 'react';

export interface LanEggplantThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEggplantThin(props: LanEggplantThinProps): React.ReactElement;
export default LanEggplantThin;
