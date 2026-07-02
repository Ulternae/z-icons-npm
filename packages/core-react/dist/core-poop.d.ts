import React from 'react';

export interface CorePoopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePoop(props: CorePoopProps): React.ReactElement;
export default CorePoop;
