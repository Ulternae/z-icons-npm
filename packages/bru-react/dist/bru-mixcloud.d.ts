import React from 'react';

export interface BruMixcloudProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMixcloud(props: BruMixcloudProps): React.ReactElement;
export default BruMixcloud;
