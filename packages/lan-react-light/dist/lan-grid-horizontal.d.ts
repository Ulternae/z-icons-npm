import React from 'react';

export interface LanGridHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGridHorizontal(props: LanGridHorizontalProps): React.ReactElement;
export default LanGridHorizontal;
