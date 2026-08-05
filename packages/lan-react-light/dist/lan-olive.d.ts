import React from 'react';

export interface LanOliveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOlive(props: LanOliveProps): React.ReactElement;
export default LanOlive;
