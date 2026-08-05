import React from 'react';

export interface LanColonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanColon(props: LanColonProps): React.ReactElement;
export default LanColon;
