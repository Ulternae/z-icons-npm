import React from 'react';

export interface MinaBookPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookPlus(props: MinaBookPlusProps): React.ReactElement;
export default MinaBookPlus;
