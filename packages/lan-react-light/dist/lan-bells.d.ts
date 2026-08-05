import React from 'react';

export interface LanBellsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBells(props: LanBellsProps): React.ReactElement;
export default LanBells;
