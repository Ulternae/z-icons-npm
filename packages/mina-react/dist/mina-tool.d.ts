import React from 'react';

export interface MinaToolProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTool(props: MinaToolProps): React.ReactElement;
export default MinaTool;
