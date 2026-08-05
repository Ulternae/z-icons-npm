import React from 'react';

export interface NeoListOlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoListOl(props: NeoListOlProps): React.ReactElement;
export default NeoListOl;
