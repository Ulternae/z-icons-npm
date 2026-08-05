import React from 'react';

export interface NeoBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBox(props: NeoBoxProps): React.ReactElement;
export default NeoBox;
