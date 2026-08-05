import React from 'react';

export interface LanSteakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSteak(props: LanSteakProps): React.ReactElement;
export default LanSteak;
