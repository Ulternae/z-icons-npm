import React from 'react';

export interface MinaChatCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChatCheck(props: MinaChatCheckProps): React.ReactElement;
export default MinaChatCheck;
