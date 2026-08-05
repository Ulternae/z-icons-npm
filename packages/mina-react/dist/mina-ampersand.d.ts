import React from 'react';

export interface MinaAmpersandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAmpersand(props: MinaAmpersandProps): React.ReactElement;
export default MinaAmpersand;
