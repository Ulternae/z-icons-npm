import React from 'react';

export interface MinaYenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaYen(props: MinaYenProps): React.ReactElement;
export default MinaYen;
