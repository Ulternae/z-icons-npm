import React from 'react';

export interface LanMelonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMelon(props: LanMelonProps): React.ReactElement;
export default LanMelon;
