import React from 'react';

export interface MinaArrowLongDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaArrowLongDown(props: MinaArrowLongDownProps): React.ReactElement;
export default MinaArrowLongDown;
