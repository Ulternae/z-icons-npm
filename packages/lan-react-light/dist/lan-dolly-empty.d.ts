import React from 'react';

export interface LanDollyEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDollyEmpty(props: LanDollyEmptyProps): React.ReactElement;
export default LanDollyEmpty;
