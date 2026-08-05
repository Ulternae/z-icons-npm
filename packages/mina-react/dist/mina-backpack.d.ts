import React from 'react';

export interface MinaBackpackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBackpack(props: MinaBackpackProps): React.ReactElement;
export default MinaBackpack;
