import React from 'react';

export interface LanFileArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileArrowDown(props: LanFileArrowDownProps): React.ReactElement;
export default LanFileArrowDown;
