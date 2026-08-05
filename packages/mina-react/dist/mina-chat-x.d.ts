import React from 'react';

export interface MinaChatXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChatX(props: MinaChatXProps): React.ReactElement;
export default MinaChatX;
