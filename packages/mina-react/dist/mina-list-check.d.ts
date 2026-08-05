import React from 'react';

export interface MinaListCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaListCheck(props: MinaListCheckProps): React.ReactElement;
export default MinaListCheck;
