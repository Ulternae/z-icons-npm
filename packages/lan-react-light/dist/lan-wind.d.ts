import React from 'react';

export interface LanWindProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWind(props: LanWindProps): React.ReactElement;
export default LanWind;
