import React from 'react';

export interface LanLoaderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLoader(props: LanLoaderProps): React.ReactElement;
export default LanLoader;
