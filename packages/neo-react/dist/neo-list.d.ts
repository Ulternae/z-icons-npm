import React from 'react';

export interface NeoListProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoList(props: NeoListProps): React.ReactElement;
export default NeoList;
