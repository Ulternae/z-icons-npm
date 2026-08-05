import React from 'react';

export interface MinaTypeBoldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTypeBold(props: MinaTypeBoldProps): React.ReactElement;
export default MinaTypeBold;
