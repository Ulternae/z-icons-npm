import React from 'react';

export interface MinaPenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPen(props: MinaPenProps): React.ReactElement;
export default MinaPen;
