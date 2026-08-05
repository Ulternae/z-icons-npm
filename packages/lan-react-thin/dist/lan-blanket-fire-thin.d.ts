import React from 'react';

export interface LanBlanketFireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlanketFireThin(props: LanBlanketFireThinProps): React.ReactElement;
export default LanBlanketFireThin;
