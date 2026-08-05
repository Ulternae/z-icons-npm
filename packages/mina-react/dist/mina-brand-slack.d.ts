import React from 'react';

export interface MinaBrandSlackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandSlack(props: MinaBrandSlackProps): React.ReactElement;
export default MinaBrandSlack;
