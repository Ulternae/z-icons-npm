import React from 'react';

export interface MinaMynaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMyna(props: MinaMynaProps): React.ReactElement;
export default MinaMyna;
