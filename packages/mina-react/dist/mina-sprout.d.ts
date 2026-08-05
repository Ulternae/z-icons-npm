import React from 'react';

export interface MinaSproutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSprout(props: MinaSproutProps): React.ReactElement;
export default MinaSprout;
