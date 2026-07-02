import React from 'react';

export interface CoreHeartHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreHeartHalf(props: CoreHeartHalfProps): React.ReactElement;
export default CoreHeartHalf;
