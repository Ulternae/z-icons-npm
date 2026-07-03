import React from 'react';

export interface BruAngellistProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAngellist(props: BruAngellistProps): React.ReactElement;
export default BruAngellist;
