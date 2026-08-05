import React from 'react';

export interface MinaFilterOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFilterOne(props: MinaFilterOneProps): React.ReactElement;
export default MinaFilterOne;
