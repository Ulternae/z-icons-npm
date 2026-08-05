import React from 'react';

export interface LanFiltersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilters(props: LanFiltersProps): React.ReactElement;
export default LanFilters;
