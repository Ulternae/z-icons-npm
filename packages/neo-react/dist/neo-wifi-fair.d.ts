import React from 'react';

export interface NeoWifiFairProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoWifiFair(props: NeoWifiFairProps): React.ReactElement;
export default NeoWifiFair;
