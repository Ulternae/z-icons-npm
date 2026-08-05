import React from 'react';

export interface MinaSearchCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchCheck(props: MinaSearchCheckProps): React.ReactElement;
export default MinaSearchCheck;
