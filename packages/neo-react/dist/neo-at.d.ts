import React from 'react';

export interface NeoAtProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoAt(props: NeoAtProps): React.ReactElement;
export default NeoAt;
