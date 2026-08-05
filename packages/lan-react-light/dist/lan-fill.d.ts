import React from 'react';

export interface LanFillProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFill(props: LanFillProps): React.ReactElement;
export default LanFill;
