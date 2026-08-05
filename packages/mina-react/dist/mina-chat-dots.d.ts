import React from 'react';

export interface MinaChatDotsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChatDots(props: MinaChatDotsProps): React.ReactElement;
export default MinaChatDots;
