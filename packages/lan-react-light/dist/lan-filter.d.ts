import React from 'react';

export interface LanFilterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilter(props: LanFilterProps): React.ReactElement;
export default LanFilter;
