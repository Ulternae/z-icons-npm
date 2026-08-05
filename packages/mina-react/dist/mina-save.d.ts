import React from 'react';

export interface MinaSaveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSave(props: MinaSaveProps): React.ReactElement;
export default MinaSave;
