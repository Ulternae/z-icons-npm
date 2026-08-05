import React from 'react';

export interface NeoLeafSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLeafSolid(props: NeoLeafSolidProps): React.ReactElement;
export default NeoLeafSolid;
