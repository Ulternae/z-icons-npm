import React from 'react';

export interface MinaListProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaList(props: MinaListProps): React.ReactElement;
export default MinaList;
