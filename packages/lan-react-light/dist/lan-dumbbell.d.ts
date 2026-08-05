import React from 'react';

export interface LanDumbbellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDumbbell(props: LanDumbbellProps): React.ReactElement;
export default LanDumbbell;
