import React from 'react';

export interface LanBorderTopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderTop(props: LanBorderTopProps): React.ReactElement;
export default LanBorderTop;
