import React from 'react';

export interface NeoRectangleWideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoRectangleWide(props: NeoRectangleWideProps): React.ReactElement;
export default NeoRectangleWide;
