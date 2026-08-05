import React from 'react';

export interface NeoCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCircleXmark(props: NeoCircleXmarkProps): React.ReactElement;
export default NeoCircleXmark;
