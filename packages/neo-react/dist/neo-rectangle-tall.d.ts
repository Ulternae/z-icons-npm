import React from 'react';

export interface NeoRectangleTallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoRectangleTall(props: NeoRectangleTallProps): React.ReactElement;
export default NeoRectangleTall;
