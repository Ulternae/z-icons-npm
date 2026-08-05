import React from 'react';

export interface LanBorderLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderLeft(props: LanBorderLeftProps): React.ReactElement;
export default LanBorderLeft;
