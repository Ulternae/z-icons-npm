import React from 'react';

export interface LanLoaderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLoaderSolid(props: LanLoaderSolidProps): React.ReactElement;
export default LanLoaderSolid;
