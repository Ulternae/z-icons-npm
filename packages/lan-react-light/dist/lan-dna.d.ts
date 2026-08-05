import React from 'react';

export interface LanDnaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDna(props: LanDnaProps): React.ReactElement;
export default LanDna;
