import React from 'react';

export interface CoreFilterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFilter(props: CoreFilterProps): React.ReactElement;
export default CoreFilter;
