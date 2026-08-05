import React from 'react';

export interface MinaTentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTent(props: MinaTentProps): React.ReactElement;
export default MinaTent;
