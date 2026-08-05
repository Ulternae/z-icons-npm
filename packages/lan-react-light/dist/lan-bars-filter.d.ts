import React from 'react';

export interface LanBarsFilterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarsFilter(props: LanBarsFilterProps): React.ReactElement;
export default LanBarsFilter;
