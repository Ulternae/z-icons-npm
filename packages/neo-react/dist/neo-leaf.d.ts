import React from 'react';

export interface NeoLeafProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLeaf(props: NeoLeafProps): React.ReactElement;
export default NeoLeaf;
