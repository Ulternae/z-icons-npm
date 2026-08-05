import React from 'react';

export interface LanBorderTopLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderTopLeft(props: LanBorderTopLeftProps): React.ReactElement;
export default LanBorderTopLeft;
