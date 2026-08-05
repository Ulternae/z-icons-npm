import React from 'react';

export interface MinaWindsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWinds(props: MinaWindsProps): React.ReactElement;
export default MinaWinds;
