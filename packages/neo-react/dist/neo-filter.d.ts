import React from 'react';

export interface NeoFilterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFilter(props: NeoFilterProps): React.ReactElement;
export default NeoFilter;
