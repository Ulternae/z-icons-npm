import React from 'react';

export interface LanLoaderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLoaderThin(props: LanLoaderThinProps): React.ReactElement;
export default LanLoaderThin;
