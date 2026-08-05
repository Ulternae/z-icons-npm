import React from 'react';

export interface MinaBookXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookX(props: MinaBookXProps): React.ReactElement;
export default MinaBookX;
