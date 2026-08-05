import React from 'react';

export interface LanAriesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAries(props: LanAriesProps): React.ReactElement;
export default LanAries;
