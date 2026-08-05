import React from 'react';

export interface LanPersonDrowningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDrowning(props: LanPersonDrowningProps): React.ReactElement;
export default LanPersonDrowning;
