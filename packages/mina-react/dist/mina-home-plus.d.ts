import React from 'react';

export interface MinaHomePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHomePlus(props: MinaHomePlusProps): React.ReactElement;
export default MinaHomePlus;
