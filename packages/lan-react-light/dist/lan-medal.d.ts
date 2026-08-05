import React from 'react';

export interface LanMedalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMedal(props: LanMedalProps): React.ReactElement;
export default LanMedal;
