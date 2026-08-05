import React from 'react';

export interface LanBorderAllProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderAll(props: LanBorderAllProps): React.ReactElement;
export default LanBorderAll;
