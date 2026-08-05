import React from 'react';

export interface NeoPercentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPercent(props: NeoPercentProps): React.ReactElement;
export default NeoPercent;
