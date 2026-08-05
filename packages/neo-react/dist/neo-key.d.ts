import React from 'react';

export interface NeoKeyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoKey(props: NeoKeyProps): React.ReactElement;
export default NeoKey;
