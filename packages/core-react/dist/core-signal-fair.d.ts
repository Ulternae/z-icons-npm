import React from 'react';

export interface CoreSignalFairProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSignalFair(props: CoreSignalFairProps): React.ReactElement;
export default CoreSignalFair;
