import React from 'react';

export interface NeoWrenchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoWrench(props: NeoWrenchProps): React.ReactElement;
export default NeoWrench;
