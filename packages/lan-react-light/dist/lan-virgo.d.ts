import React from 'react';

export interface LanVirgoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVirgo(props: LanVirgoProps): React.ReactElement;
export default LanVirgo;
