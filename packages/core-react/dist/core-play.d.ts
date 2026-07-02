import React from 'react';

export interface CorePlayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePlay(props: CorePlayProps): React.ReactElement;
export default CorePlay;
