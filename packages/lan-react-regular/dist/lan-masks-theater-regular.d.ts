import React from 'react';

export interface LanMasksTheaterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMasksTheaterRegular(props: LanMasksTheaterRegularProps): React.ReactElement;
export default LanMasksTheaterRegular;
