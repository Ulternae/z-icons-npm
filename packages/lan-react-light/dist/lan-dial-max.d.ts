import React from 'react';

export interface LanDialMaxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialMax(props: LanDialMaxProps): React.ReactElement;
export default LanDialMax;
