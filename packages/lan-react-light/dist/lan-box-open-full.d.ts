import React from 'react';

export interface LanBoxOpenFullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxOpenFull(props: LanBoxOpenFullProps): React.ReactElement;
export default LanBoxOpenFull;
