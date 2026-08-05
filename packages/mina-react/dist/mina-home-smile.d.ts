import React from 'react';

export interface MinaHomeSmileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHomeSmile(props: MinaHomeSmileProps): React.ReactElement;
export default MinaHomeSmile;
