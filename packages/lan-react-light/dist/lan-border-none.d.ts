import React from 'react';

export interface LanBorderNoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderNone(props: LanBorderNoneProps): React.ReactElement;
export default LanBorderNone;
