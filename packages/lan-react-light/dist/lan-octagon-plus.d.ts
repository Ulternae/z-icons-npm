import React from 'react';

export interface LanOctagonPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonPlus(props: LanOctagonPlusProps): React.ReactElement;
export default LanOctagonPlus;
