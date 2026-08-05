import React from 'react';

export interface MinaKeyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaKey(props: MinaKeyProps): React.ReactElement;
export default MinaKey;
