import React from 'react';

export interface MinaChatPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChatPlus(props: MinaChatPlusProps): React.ReactElement;
export default MinaChatPlus;
