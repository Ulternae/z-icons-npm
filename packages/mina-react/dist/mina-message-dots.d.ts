import React from 'react';

export interface MinaMessageDotsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMessageDots(props: MinaMessageDotsProps): React.ReactElement;
export default MinaMessageDots;
