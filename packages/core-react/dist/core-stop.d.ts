import React from 'react';

export interface CoreStopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreStop(props: CoreStopProps): React.ReactElement;
export default CoreStop;
