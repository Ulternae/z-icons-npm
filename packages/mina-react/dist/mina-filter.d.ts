import React from 'react';

export interface MinaFilterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFilter(props: MinaFilterProps): React.ReactElement;
export default MinaFilter;
