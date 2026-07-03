import React from 'react';

export interface BruJxlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruJxl(props: BruJxlProps): React.ReactElement;
export default BruJxl;
