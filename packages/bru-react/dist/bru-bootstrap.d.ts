import React from 'react';

export interface BruBootstrapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBootstrap(props: BruBootstrapProps): React.ReactElement;
export default BruBootstrap;
