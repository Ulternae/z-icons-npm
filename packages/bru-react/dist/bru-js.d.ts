import React from 'react';

export interface BruJsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruJs(props: BruJsProps): React.ReactElement;
export default BruJs;
