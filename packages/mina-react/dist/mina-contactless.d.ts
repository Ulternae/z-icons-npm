import React from 'react';

export interface MinaContactlessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaContactless(props: MinaContactlessProps): React.ReactElement;
export default MinaContactless;
